const jwt = require('jsonwebtoken');

const JWT_SECRET = 'interferetion';

const auth = (req, res, next) => {
  let token;
  const { cookie } = req.headers;
  if (cookie) {
    // eslint-disable-next-line prefer-destructuring
    token = cookie.split('=')[1];
  }

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(res.status(401).send({ message: `Авторизация не прошла ${payload}` }));
  }

  req.user = payload;
  next();
};

module.exports = auth;
