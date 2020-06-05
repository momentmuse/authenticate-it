const create = (req, res) => {
  const { user } = req.body;
  console.log(`hey this is CREATE! ${user}`);
};

const login = (req, res) => {
  const { user } = req.body;
  console.log(`hey this is LOGIN! ${user}`);
};

const logout = (req, res) => {
  const { user } = req.body;
  console.log(`hey this is LOGOUT! ${user}`);
};

module.exports = { create, login, logout };
