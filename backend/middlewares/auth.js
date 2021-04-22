const jwt = require('jsonwebtoken');

const JWT_SECRET = 'interferetion';

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  // const { cookie } = req.headers;
  // if (cookie) {
  //   // eslint-disable-next-line prefer-destructuring
  //   token = cookie.split('=')[1];
  // }

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(res.status(401).send({ message: `Авторизация не прошла: ${err}, cookies: ${req.cookies.jwt}` }));
  }

  req.user = payload;
  next();
};

module.exports = auth;
