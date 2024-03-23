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

const deleteUser = (req, res) => {
  try {
    const user = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (user !== -1) {
      users.splice(user, 1);
      // fixing the ID
      for (let i = user; i < users.length; i++) {
        users[i].id -= 1;
      }
      // update the json file
      fs.writeFile(usersPath, JSON.stringify(users, null, 2), "utf8", (err) => {
        if (err) {
          console.log(`err => ${err}`);
          res.status(500).json({ message: "some error" });
        } else {
          console.log("deleted!!");
          res.status(200).json(users[user]);
        }
      });
    } else {
      console.log("not found!");
      res.status(404).json({ message: "user not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something wrong!" });
  }
};

module.exports = { deleteUser };
