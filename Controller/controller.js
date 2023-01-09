const db = require("../config/db");

const getUser = (req, res) => {
  db.query("select * from USERS1", function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const createUser = (req, res) => {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const id = req.body.id;
  const img = req.body.url;
  db.query(
    `INSERT INTO USERS1(NAME,LAST_NAME,EMAIL,USER_ID,MOBILE,IMG_URL) VALUES ("${name}","${lastname}","${email}","${id}","${phone}","${img}")`,
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
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  console.log(id);
  db.query(
    `UPDATE USERS1 SET NAME = "${name}", LAST_NAME = "${lastname}", EMAIL = "${email}", MOBILE = "${phone}" WHERE USER_ID="${id}"`,
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
};

const deleteUser = (req, res) => {
  const delId = req.params.id;
  db.query("delete from USERS1 where USER_ID=?", [delId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("deleted");
    }
  });
};

module.exports = { createUser, getUser, updateUser, deleteUser };
