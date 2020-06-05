const create = (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  console.log(
    `hey this is CREATE! ${email} and ${password} for ${firstName} ${lastName}`
  );
};

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(`hey this is LOGIN! ${email} and ${password}`);
};

const logout = (req, res) => {
  const { id } = req.body;
  console.log(`hey this is LOGOUT! ${id}`);
};

module.exports = { create, login, logout };
