const authMiddleware = async (req, res, next) => {
  if (!req.session.uid) {
    return res.sendStatus(403);
  }
  next();
};

module.exports = authMiddleware;
