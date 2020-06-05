const bcrypt = require('bcrypt');
const User = require('./../models/user');

const profile = async (req, res) => {
  console.log('whats the session in profile ', req.session);
  const { userId } = req.session;
  try {
    const user = await User.findOne(
      { id: userId },
      { firstName: 1, lastName: 1 }
    );
    console.log('found the user by id ', user);
    res.status(201).send(user);
  } catch {
    console.log(error);
    res.status(404).send(error);
  }
};

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
    req.session.userId = user._id;
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
  if (!user) res.status(404).send('User does not exist');
  const validatedPass = await bcrypt.compare(password, user.password);
  if (validatedPass) {
    req.session.userId = user._id;
    console.log('whats in the req session id', req.session.id);
    console.log('whats in the req userID', req.session.userId);
    res.status(200).send(user);
  } else {
    res.status(401).send('Passwords do not match');
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('😞 There was an error logging out');
      res.sendStatus(500);
    } else {
      res.clearCookie('sid');
      console.log('🍪 Destroyed the session cookie');
      res.sendStatus(200);
    }
  });
  console.log(`hey this is LOGOUT! ${req.body.id}`);
};

module.exports = { profile, create, login, logout };
