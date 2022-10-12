const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connector = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "LECTURES",
});

connector.connect((err) => {
  if (err) throw err;
  console.log("Succesfully connected");

  const sqlCreateTable = `CREATE TABLE products (id integer PRIMARY KEY AUTO_INCREMENT, name text not null);`;
  const sqlInsertRecord = `INSERT INTO products (name) VALUES ('First Product')`;
  const sqlSelectAll = `SELECT * FROM products`;

  //crete our table
  connector.query(sqlCreateTable, (err) => {
    if (err) throw err;
    //insert product
    connector.query(sqlInsertRecord, (err) => {
      if (err) throw err;
      //query and log all records
      connector.query(sqlSelectAll, (err, results) => {
        if (err) throw err;
        console.log(results);
      });
    });
  });
});
