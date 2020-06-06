const authMiddleware = async (req, res, next) => {
  if (!req.session.userId) {
    console.log('From authMiddleware: no user id in session!');
    return;
  }
  next();
};

module.exports = authMiddleware;
