const fs = require("node:fs");

// users data path
const usersPath =
  "C:/E/ARK-X/BootCamp/3_Mar/cards-crud/backend/users_data.json";

// read data
let users = [];
fs.readFile(usersPath, "utf8", (err, data) => {
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

// add user
const addUser = (req, res) => {
  try {
    const newUser = {
      id: users.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      stillAlive: req.body.stillAlive,
      country: req.body.country,
    };
    users.push(newUser);
    // update json file
    fs.writeFile(usersPath, JSON.stringify(users, null, 2), "utf8", (err) => {
      if (err) {
        console.log(`err => ${err}`);
        res.status(500).json({ message: "some error" });
      } else {
        console.log("created!!");
        res.status(201).json(newUser);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something wrong!" });
  }
};

module.exports = { addUser };
