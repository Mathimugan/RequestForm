const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
const mysql2 = require("mysql2");
const bodyParser = require('body-parser');
let date=Date.now() + '-';
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "fuyuadmin123",
    database: "fuyu"
  });
  con.connect(function(err) {
    if (err) throw err;
  });

app.post("/service",(req,res)=>
{
const fullname = req.body.FullName;
const contact = req.body.Contact;
const designation = req.body.Designation;
const department = req.body.Department;
const request_date = req.body.Request_date;
const email = req.body.Email;
const location = req.body.Location;
const onbehalf = req.body.Onbehalf;
const purpose = req.body.Purpose;
const request_type = req.body.Request_type;
const name = req.body.Name;
const created_by = req.body.Created_by;
const created_on = req.body.Created_on;
const created = new Date();
console.log(fullname);
/*var values = [[ fullname, contact,designation,department,request_date,email,location,onbehalf,purpose,request_type,
name,created_by,created_on]];
con.query("INSERT INTO register (fullname,email,department,designation,attachment,created,onboarddate,linkus) VALUES ?",[values], function (err, result, fields) {
    if (err) throw err;
    res.send("Success");
  });*/


  });
  
  
  







https
  .createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("privkey.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(4000, () => {
    console.log("serever is runing at port 4000");
  });