const authenticate = async (req, res, next) => {
  if (!req.session.userId) {
    console.log('no userId found in session');
    return;
  }
  next();
};

module.exports = authenticate;
