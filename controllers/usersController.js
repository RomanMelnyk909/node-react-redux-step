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
      res.status(200).json({ message: "user sucsess" });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};
