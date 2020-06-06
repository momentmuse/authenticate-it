const bcrypt = require('bcrypt');
const User = require('./../models/user');

const create = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) res.status(409).send('User already exists');
  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({
    ...req.body,
    password: hash,
  });
  try {
    const user = await newUser.save();
    // send signed JWT
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  console.log('whats the session ', req.session.cookie);
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(404).send('User does not exist');
  const validatedPass = await bcrypt.compare(password, user.password);
  if (validatedPass) {
    // send signed JWT
    res.status(200).send(user);
  } else {
    res.status(401).send('Passwords do not match');
  }
};

const profile = async (req, res) => {
  // decode payload of JWT token, get uid
  try {
    const user = await User.findOne(
      { _id: uid },
      { firstName: 1, lastName: 1 }
    );
    // send user info
    res.status(201).send(user);
  } catch {
    console.log(error);
    res.status(404).send(error);
  }
};

const logout = (req, res) => {
  // destroy JWT? invalidate it?
};

module.exports = { create, login, profile, logout };
