const jwt = require('jsonwebtoken');

const JWT_SECRET = 'interferetion';

const auth = (req, res, next) => {
  /*const token = req.cookies.jwt;
  // const { cookie } = req.headers;
  // if (cookie) {
  //   // eslint-disable-next-line prefer-destructuring
  //   token = cookie.split('=')[1];
  // }
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(res.status(401).send({ message: `Авторизация не прошла: ${err}, cookies: ${req.cookies}` }));
  }

  // req.user = payload;*/
  req.user = '608038483d6dc1495cc865ff';
  next();
};

module.exports = auth;
