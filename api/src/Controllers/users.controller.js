const userService = require("../Services/user.service");

//GET '/tea'
const getAllUsers = (req, res, next) => {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
};



//export controller functions
module.exports = {
  getAllUsers
};
