const fs = require("node:fs");

// users data path
const usersPath =
  "C:/E/ARK-X/BootCamp/3_Mar/cards-crud/backend/users_data.json";

// read data
let users = [];
fs.readFile(usersPath, (err, data) => {
  if (!err) {
    try {
      users = JSON.parse(data);
    } catch (e) {
      console.log(`something wrong! => ${e}`);
    }
  } else {
    console.log(`something wrong!! => ${err}`);
  }
});

// update user
const updateUser = (req, res) => {
  try {
    const user = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (user !== -1) {
      users[user].firstName = req.body.firstName;
      users[user].lastName = req.body.lastName;
      users[user].age = req.body.age;
      users[user].stillAlive = req.body.stillAlive;
      users[user].country = req.body.country;
      // update json file
      fs.writeFile(usersPath, JSON.stringify(users, null, 2), "utf8", (err) => {
        if (err) {
          console.log(`err => ${err}`);
          res.status(500).json({ message: "some error" });
        } else {
          console.log("updated!!");
          res.status(200).json(users[user]);
        }
      });
    } else {
      res.status(404).json({ message: "user not found!" });
    }
  } catch {
    console.log(err);
    res.status(500).json({ message: "something wrong!" });
  }
};

module.exports = { updateUser };
