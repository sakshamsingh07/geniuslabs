const createConnection = require('./dataconnection');
const connection = createConnection();
//const connection = require('./dataconnection');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const {sendSMS} = require('./lib/sms-service');
const {sendCongratulaionsSMS} = require('./lib/congratulations-sms-service');
const moment = require('moment-timezone');

app.use(session({
    secret:'some secret',
    resave: false,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the "stemgamewebsite" directory
console.log(__dirname);
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'stemgames', 'geniuslabsvipmembers', 'geniuslabsvipmembers_steminfoform.html')); 
});


app.post('/form', async (req, res) => {
    console.log('Request body:', req.body, '\n\n\n');

    const {
        ChildName,
        ContactNo,
        ChildSchool,
        Location,
        CustomLocation,
        ChildAge,
        Interest
    } = req.body;
    
    // Validate that name is provided
    if (!ChildName) {
        return res.status(400).json({ error: 'ChildName is required' });
    }

    const otp = Math.floor(1000 + Math.random() * 9000) // Generates random 4 digit number

    const timestamp = moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss'); // Adjust time zone as needed

    var sql = "INSERT INTO SurveyDataTable (ChildName, ContactNo, ChildSchool, Location, CustomLocation, ChildAge, Interest, Otp, TimeStamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, [
        ChildName, 
        ContactNo, 
        ChildSchool,
        Location,
        CustomLocation ,
        ChildAge,
        Interest,
        otp,
        timestamp
    ], (error, result) => {
        if (error) {
            console.error('Error executing query:', error);
             return res.status(500).json({ error: 'Error submitting data', details: error.message });
        }

        console.log('Data Submitted successfully:', result );
        const {insertId} = result;

        //res.setHeader('Content-Type', 'application/json');
        res.json({ result: 'success', message: 'Data Submitted successfully', insertId});  

        try {
            console.log(`Sending OTP: ${otp} to mobile: ${ContactNo}`)
            sendSMS(parseInt(ContactNo), otp, ChildName);
        } catch(e) {
            console.log('\n\n\nError in sending OTP ::', e);
        }

        

        // connection.end();
    });
});

app.post('/verify-otp', (req, res) => {
    const {contactNumber, otp} = req.body;

    if(!(contactNumber || otp)) {
        return res.status(400).json({ error: 'ContactNo and Otp are required' });
    }

    try{
        var sql = `SELECT Otp , ChildName FROM SurveyDataTable WHERE ContactNo='${contactNumber}'`;
        connection.query(sql, (error, result) => {
            if (error) {
                console.error('Error executing query:', error);
                 return res.status(500).json({ error: 'Error submitting data', details: error.message });
            }
            console.log('from db : ',result)
            const {Otp , ChildName} = result[result.length-1];
    
            if(Otp != otp) {
                return res.status(403).json({ error: 'Wrong Otp!' });
            }
            
            console.log(`congratulations send to: ${contactNumber} with name : ${ChildName}`)
            sendCongratulaionsSMS(parseInt(contactNumber), ChildName);

            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ message: 'OTP verified successfully!'});
        })
    }catch(e) {
        console.log('error in server :: ', e);
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});