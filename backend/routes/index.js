const router = require('express').Router();
const cookieParser = require('cookie-parser');
const { celebrate, Joi } = require('celebrate');
const userRouter = require('./users');
const { createUser, login } = require('../controllers/users');
const cardRouter = require('./cards');
const auth = require('../middlewares/auth');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
}), createUser);
router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
}), login);
router.use(cookieParser());
router.use(auth);
router.use('/users', userRouter);
router.use('/cards', cardRouter);

module.exports = router;
