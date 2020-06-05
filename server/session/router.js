const router = require('express').Router();
const userController = require('./controllers/user.js');

// this needs some work
// how will it connect to the auth middleware?
router.post('/register', userController.create);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
