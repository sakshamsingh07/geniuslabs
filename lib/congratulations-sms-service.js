const axios = require("axios");

const TRUSTSIGNAL_URL = "https://api.trustsignal.io/v1/sms?api_key=bc94b639-306b-4bed-9e18-6e560286f14d";
const CONGRATULATIONS_TRUSTSIGNAL_TEMPLATE_ID ="1707170420132163347";
const TRUSTSIGNAL_SENDER_ID = "GENLBS";

module.exports = {
    sendCongratulaionsSMS: async (mobileNumber, name) => {
        
        const config = {
          method: "post",
          url: TRUSTSIGNAL_URL,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            sender_id: TRUSTSIGNAL_SENDER_ID,
            to: [mobileNumber],
            route: "otp",
            message:`Dear ${name ? name : 'User'} ,\nCongratulations and Welcome!\nYou have been successfully registered with GeniusLabs.\nVisit https://bit.ly/GLabs for latest updates.`,
            template_id: CONGRATULATIONS_TRUSTSIGNAL_TEMPLATE_ID
          }),
        };
  
        try {
            const res = await axios(config);
            return res.data;
        }catch(e) {
            console.log(e.response.data);
            return null;
        }
    }
  }