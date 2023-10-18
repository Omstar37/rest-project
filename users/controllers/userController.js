const mongoose = require('mongoose');

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const collections = await mongoose.connection.db.collection("Users");
    const doc = await collections.find({}).toArray();
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
};

//add new user
exports.addUser = async (req, res) => {
  try {
    const User = await mongoose.connection.db.collection("Users");
    const { firstName, lastName, email, password, permissionLevel } = req.body;
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      permissionLevel,
    };
    const insertResult = await User.insertOne(newUser);
    console.log("==> New User:", insertResult);
    res.status(201).json(insertResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating a user." });
  }
};
