const Card = require('../models/card');

const NotFoundError = require('../errors/not-found-err');
const RequestError = require('../errors/req-err');
const ForbiddenError = require('../errors/forbidden-err');

const getCards = (req, res, next) => {
  Card.find({})
    .populate('owner', 'likes')
    .then((cards) => res.send(cards))
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.send(card);
    }, (err) => {
      if (err.name === 'ValidationError') {
        throw new RequestError('Ошибка валидации');
      }
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  const id = req.params.cardId;
  Card.findById(id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Запрашивая карточка не найдена');
      }

      if (card.owner.toString() === req.user._id.toString()) {
        Card.findByIdAndRemove(id)
          .then((delCard) => res.send(delCard))
          .catch(next);
      } else {
        throw new ForbiddenError('Вы не можете удалить не свою карточку');
      }
    }, (err) => {
      if (err.message === 'NotValidId') {
        throw new NotFoundError('Запрашивая карточка не найдена');
      } else if (err.name === 'CastError') {
        throw new RequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Запрашивая карточка не найдена');
      }
      res.send(card);
    }, (err) => {
      if (err.message === 'NotValidId') {
        throw new NotFoundError('Запрашивая карточка не найдена');
      } else if (err.name === 'CastError') {
        throw new RequestError('Переданы некорректные данные');
      } else if (err.name === 'ValidationError') {
        throw new RequestError('Ошибка валидации');
      }
    })
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Запрашивая карточка не найдена');
      }
      res.send(card);
    }, (err) => {
      if (err.message === 'NotValidId') {
        throw new NotFoundError('Запрашивая карточка не найдена');
      } else if (err.name === 'CastError') {
        throw new RequestError('Переданы некорректные данные');
      } else if (err.name === 'ValidationError') {
        throw new RequestError('Ошибка валидации');
      }
    })
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
