const db = require("../config/db");

const getUser = (req, res) => {
  db.query("select * from USERS1", function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
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
    (err, result, fields) => {
      if (err) {
        res.send("ERROR IN INSERT!!!!");
      } else {
        return res.status(200).json({
          message: "User created!!",
        });
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
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("ERROR IN INSERT!!!!");
      } else {
        return res.status(200).json({
          error: false,
          data: result,
          message: "users list.",
        });
      }
    }
  );
};

const deleteUser = (req, res) => {
  const delId = req.params.id;
  if (!delId) {
    return res.status(400).json({
      error: true,
      message: "Please provide userId",
    });
  }
  db.query("delete from USERS1 where USER_ID=?", [delId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      return res.status(200).json({
        status: "success",
        message: "User is deleted",
      });
    }
  });
};

module.exports = { createUser, getUser, updateUser, deleteUser };
