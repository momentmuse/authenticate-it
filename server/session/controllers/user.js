const bcrypt = require('bcrypt');
const User = require('./../models/user');

const create = (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      throw new Error(err);
    } else {
      const newUser = new User({
        email,
        password: hash,
        firstName,
        lastName,
      });
      try {
        const user = await newUser.save();
        res.status(201).send(user);
      } catch (error) {
        console.log(error);
        res.status(400).send(error);
      }
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const hash = user.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        throw new Error(err);
      } else {
        result
          ? res.status(200).send(user)
          : res.status(401).send('Passwords do not match');
        // persist session stuff
      }
    });
  } else {
    res.status(404).send('User does not exist');
  }
};

const logout = (req, res) => {
  const { id } = req.body;
  console.log(`hey this is LOGOUT! ${id}`);
};

module.exports = { create, login, logout };
