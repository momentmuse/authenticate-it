const bcrypt = require('bcrypt');
const User = require('./../models/user');

const create = async (req, res) => {
  // REMOVE-START
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
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
    res.status(400).send({ error, message: 'Could not create user' });
  }
  // REMOVE-END
};

const login = async (req, res) => {
  // REMOVE-START
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user)
    return res.status(404).send({ error, message: 'User does not exist' });
  const validatedPass = await bcrypt.compare(password, user.password);
  if (validatedPass) {
    req.session.uid = user._id;
    res.status(200).send(user);
  } else {
    res.status(401).send({ error: '401', message: 'Passwords do not match' });
  }
  // REMOVE-END
};

const profile = async (req, res) => {
  // REMOVE-START
  const { uid } = req.session;

  try {
    const user = await User.findOne(
      { _id: uid },
      { firstName: 1, lastName: 1 }
    );
    res.status(201).send(user);
  } catch {
    res.status(404).send({ error, message: 'User not found' });
  }
  // REMOVE-END
};

const logout = (req, res) => {
  // REMOVE-START
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error, message: 'Could not log out, please try again' });
    } else {
      res.clearCookie('sid');
      res.sendStatus(200);
    }
  });
  // REMOVE-END
};

module.exports = { create, login, profile, logout };
