const mysql = require('mysql');

//module.exports = db;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactnode"
})

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
    return;
  }

  console.log("We are connected to gfg_db database");
  
});

module.exports = db;