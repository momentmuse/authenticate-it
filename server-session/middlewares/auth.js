const authMiddleware = async (req, res, next) => {
  // REMOVE-START
  if (!req.session.uid) {
    return res.sendStatus(403);
  }
  next();
  // REMOVE-END
};

module.exports = authMiddleware;
