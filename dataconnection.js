// const mysql = require("mysql");
// const connection = mysql.createConnection({
//     host: "64.227.136.74",
//     user: "rzcanazzec",
//     password: "57h4z2dMu7",
//     database: "rzcanazzec"
// });

// connection.connect((err) => {
//     if (err) {
//         console.error("Connection error:", err);
//     } else {
//         console.log("Connected to MySQL");
//     }

//     // Uncomment the following section for testing queries
    
//     connection.query("SHOW TABLES", (queryerr, result, fields) => {
//         if (queryerr) {
//             console.error("Error executing query:", queryerr);
//             return;
//         }
//         console.log("Query results:", result);
//         // connection.end();
//     });
    
// });

// // Handle connection errors
// connection.on("error", (err) => {
//     console.error("MySQL connection error:", err);

//     // If the connection is lost, attempt to reconnect
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//         console.log("Attempting to reconnect to MySQL...");
//         connection.connect();
//     } else {
//         throw err;
//     }
// });

// module.exports = connection;





const mysql = require("mysql");

function createConnection() {
    const pool = mysql.createPool({
        connectionLimit: 10, // Adjust as needed
        host: "64.227.136.74",
        user: "rzcanazzec",
        password: "57h4z2dMu7",
        database: "rzcanazzec",
        acquireTimeout: 120000,
        connectTimeout: 120000, // Set a higher value based on your needs
    });

    pool.getConnection((err, connection) => {
        if (err) {
            console.error("Error getting connection from pool:", err);
            setTimeout(createConnection, 2000); // Retry after 2 seconds
        } else {
            console.log("Connected to MySQL");

            // Uncomment the following section for testing queries
            connection.query("SHOW TABLES", (queryErr, result, fields) => {
                if (queryErr) {
                    console.error("Error executing query:", queryErr);
                } else {
                    console.log("Query results:", result);
                }
                connection.release(); // Release the connection back to the pool
            });
        }
    });

    pool.on("error", (err) => {
        console.error("MySQL pool error:", err);
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.log("Attempting to reconnect to MySQL...");
            createConnection(); // Reconnect
        } else {
            throw err;
        }
    });

    return pool;
}

// Initial connection
module.exports =createConnection;
