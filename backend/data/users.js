const fs = require("node:fs");

// users data path
const usersPath =
  "C:/E/ARK-X/BootCamp/3_Mar/fahd-exercise/backend/users_data.json";

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

module.exports = { users, usersPath };
