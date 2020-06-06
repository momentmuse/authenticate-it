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
    req.session.uid = user._id;
    console.log('whats in the req session id', req.session.id);
    console.log('whats in the req uid', req.session.uid);
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
    req.session.uid = user._id;
    console.log('whats in the req session id', req.session.id);
    console.log('whats in the req uid', req.session.uid);
    res.status(200).send(user);
  } else {
    res.status(401).send('Passwords do not match');
  }
};

const profile = async (req, res) => {
  console.log(' req session: ', req.session);
  const { uid } = req.session;
  console.log('userId from req session: ', uid);
  try {
    console.log('again ', uid);
    const user = await User.findOne(
      { _id: uid },
      { firstName: 1, lastName: 1 }
    );
    console.log('found the user by id ', user);
    res.status(201).send(user);
  } catch {
    console.log(error);
    res.status(404).send(error);
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('😞 There was an error logging out');
      res.status(500).end();
    } else {
      res.clearCookie('sid');
      console.log('🍪 Destroyed the session cookie');
      res.status(200).end();
    }
  });
};

module.exports = { create, login, profile, logout };
