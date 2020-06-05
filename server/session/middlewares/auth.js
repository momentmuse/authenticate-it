const authenticate = async (req, res, next) => {
  // Work in progress...
  if (!req.session.userId) {
    console.log('no userId found in session');
    return;
  }
  next();
};

module.exports = authenticate;
