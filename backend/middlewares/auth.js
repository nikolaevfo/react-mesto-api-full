const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(res.status(401).send({ message: `Авторизация не прошла: ${err}, cookies: ${req.cookies}` }));
  }

  req.user = payload;
  next();
};

module.exports = auth;
