const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../models/user');

const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';

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
    const { _id, firstName, lastName } = user;
    const accessToken = jwt.sign({ _id, firstName, lastName }, SECRET_KEY);
    res.status(201).send(accessToken);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(404).send('User does not exist');
  const validatedPass = await bcrypt.compare(password, user.password);
  if (validatedPass) {
    const { _id, firstName, lastName } = user;
    const accessToken = jwt.sign({ _id, firstName, lastName }, SECRET_KEY);
    res.status(200).send(accessToken);
  } else {
    res.status(401).send('Passwords do not match');
  }
};

const profile = async (req, res) => {
  // get user from req
  const { _id } = req.user;
  try {
    // not necessary to do this as the user info exists on the token itself
    const user = await User.findOne(
      { _id: _id },
      { firstName: 1, lastName: 1 }
    );
    res.status(201).send(user);
  } catch {
    console.log(error);
    res.status(404).send(error);
  }
};

const logout = (req, res) => {
  // delete the token client side upon logout.
  // invalidate old token?
};

module.exports = { create, login, profile, logout };
