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

// get user by id
const getUserById = (req, res) => {
  try {
    const user = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (user !== -1) {
      console.log("found!");
      res.status(200).json(users[user]);
    } else {
      res.status(404).json({ message: "user not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something wrong!" });
  }
};

module.exports = { getUserById };
