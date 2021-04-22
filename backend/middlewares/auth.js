const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const token = JSON.stringify(req.cookies.jwt);
  // const { cookie } = req.headers;
  // if (cookie) {
  //   // eslint-disable-next-line prefer-destructuring
  //   token = cookie.split('=')[1];
  // }
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(res.status(401).send({ message: `Авторизация не прошла: ${err}, cookies: ${JSON.stringify(req.cookies)}` }));
  }

  req.user = payload;
  // req.user = { _id: '608038483d6dc1495cc865ff' };
  next();
};

module.exports = auth;
