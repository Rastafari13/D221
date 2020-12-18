//Conexão à base de dados

const mysql = require('mysql');
module.exports = {
   con : mysql.createConnection({
        host:'remotemysql.com',
        user:'SKMj4aTpc9',
        password:'djKHE1y1Pg',
        database:'SKMj4aTpc9',
        //port:3306
    })};
    
 //module.exports = con;
 
 /*con.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});*/