const { response } = require("express");
const User = require("../data/models/user");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

exports.createUser = async (req, res, next) => {
  const { name, surName, email, password } = req.body;

  console.log("BODY => ", req.body);
  try {
    let user = await User.findOne({ where: { email } });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    } else {
      user = new User({
        name,
        surName,
        email,
        password,
      });
      await user.save();
      res.status(200).json({ message: "user created" });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      res.status(400).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    response.status(500).json({ message: "Internal Server error" });
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.body.id;
  const updatedUser = {
    name: req.body.name,
    surName: req.body.surName,
    email: req.body.email,
  };
  try {
    const user = await User.update(updatedUser, { where: { id: userId } });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateUserPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    if (req.body.oldPassword !== user.password) {
      res.status(400).json({ message: "Invalid password" });
    }
    if (
      await User.update(
        { password: req.body.password },
        { where: { id: req.params.id } }
      )
    ) {
      res.status(200).json({ message: "Password sucsessfully updated" });
    }
    
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
