const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root12345",
  database: "PROBO",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello from server");
});

// get request
app.get("/fetch", (req, res) => {
  con.query("select * from USERS1", function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/post", (req, res) => {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const id = req.body.id;
  const img = req.body.url;

  con.query(
    `INSERT INTO USERS1(NAME,LAST_NAME,EMAIL,USER_ID,MOBILE,IMAGE_URL) VALUES ("${name}","${lastname}","${email}","${id}","${phone}","${img}")`,
    (err) => {
      if (err) {
        console.log(err);
        res.send("ERROR IN INSERT!!!!");
      } else {
        console.log("INSERT SUCCESSFUL");
        res.send("INSERTED!!!!");
      }
    }
  );
});
//DELETE USER
app.delete("/deleteuser/:id", (req, res) => {
  const delId = req.params.id;
  con.query("delete from mytable where id=?", [delId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(deleted);
    }
  });
});
//UPDATE USER
app.put("/update/:id", (req, res) => {
  const upId = req.params.id;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;

  con.query(
    "UPDATE mytable SET name =?,lastname = ?,email=?,phone=?",
    [name, lastname, email, phone],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("UPDATED");
      }
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
