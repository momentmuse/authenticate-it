const router = require('express').Router();
const userController = require('./controllers/user');
// const authMiddleware = require('./middlewares/auth');

router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/me', userController.profile); // protected route, put auth middleware here
router.post('/logout', userController.logout); // protected route, put auth middleware here

module.exports = router;
