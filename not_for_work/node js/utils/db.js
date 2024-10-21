import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_ms"
});

// Connect to the database
con.connect((err) => {
    if (err) {
        console.error("Connection failed: " + err.stack);
        return; // Exit if connection fails
    }
    console.log("Connected successfully as id " + con.threadId);
});

// Remember to handle disconnection
