const router = require('express').Router();
const userController = require('./controllers/user.js');
// const auth = require('./middlewares/auth.js');

// this needs some work
// how will it connect to the auth middleware?

router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/me', userController.profile); // protected route, put auth middleware here
router.post('/logout', userController.logout); // protected route, put auth middleware here

module.exports = router;
