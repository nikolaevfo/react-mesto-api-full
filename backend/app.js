const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const rateLimit = require('express-rate-limit');
const router = require('./routes');

const NotFoundError = require('./errors/not-found-err');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
});

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://nikolaev.student.nomoredomains.club',
    'https://nikolaev.student.nomoredomains.club',
   ],
   methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
   preflightContinue: false,
   optionsSuccessStatus: 204,
   allowedHeaders: ['Content-Type', 'origin'],
   credentials: true,
};
app.use('*', cors(corsOptions));
],
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin'],
  credentials: true,
};
app.use('*', cors(corsOptions));

>>>>>>> a173aabf31901111ce7311eca80e4b5734701091
app.use(limiter);
app.use(helmet());
app.use(bodyParser.json());

app.use(router);
app.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});
app.use(errors());
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? `На сервере произошла ошибка ${err}`
        : message,
    });
  next();
});

app.listen(PORT);
