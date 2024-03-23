// const { users } = require("../data/users");
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

// get users data
const getUsers = (req, res) => {
  res.status(200).json(users);
};

module.exports = { getUsers };
