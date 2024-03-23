const express = require("express");
const { getUsers } = require("../controllers/get-users");
const { getUserById } = require("../controllers/get-user-by-id");
const { addUser } = require("../controllers/add-user");
const { updateUser } = require("../controllers/update-user");
const { deleteUser } = require("../controllers/delete-user");
const router = express.Router();

/**
 * @desc get all the authors
 * @route /users
 * @method GET
 * @access public
 */
router.get("/users", getUsers);

/**
 * @desc get user by id
 * @route /users/:id
 * @method GET
 * @access public
 */
router.get("/users/:id", getUserById);

/**
 * @desc get user by id
 * @route /users/add
 * @method POST
 * @access public
 */
router.post("/users/add", addUser);

/**
 * @desc update an author
 * @route /users/update/:id
 * @method PUT
 * @access public
 */
router.put("/users/update/:id", updateUser);

/**
 * @desc update an author
 * @route /users/delete/:id
 * @method DELTE
 * @access public
 */
router.delete("/users/delete/:id", deleteUser);

module.exports = router;
