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
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(404).send('User does not exist');
  const validatedPass = await bcrypt.compare(password, user.password);
  if (validatedPass) {
    req.session.uid = user._id;
    res.status(200).send(user);
  } else {
    res.status(401).send('Passwords do not match');
  }
};

const profile = async (req, res) => {
  const { uid } = req.session;
  try {
    console.log('again ', uid);
    const user = await User.findOne(
      { _id: uid },
      { firstName: 1, lastName: 1 }
    );
    res.status(201).send(user);
  } catch {
    console.log(error);
    res.status(404).send(error);
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.clearCookie('sid');
      res.sendStatus(200);
    }
  });
};

module.exports = { create, login, profile, logout };
