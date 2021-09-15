# react-mesto-api-full

### Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`.

Публичный IP-адрес сервера: 178.154.234.241.

#### Ссылка на репозиторий с фронтендом [Mesto](https://github.com/nikolaevfo/react-mesto-auth)

#### Ссылка на сайт [Mesto](https://nikolaev.student.nomoredomains.club)

#### Ссылка на [API](https://api.nikolaevfo.student.nomoredomains.club)

#### В процессе работы использованы:
- Вёрстка по стандарту HTML5, стили CSS3(Flexbox, Grid)
- JavaScript ES6, MongoDB, асинхронные запросы на сервер Fetch API
- GIT, WebPack
- React: Create React App, хуки useState, useEffect, useContext, useRef, функциональные компоненты
- работа с LocalStorage и Cookies

### Функционал проекта:
- Регистрация и авторизация пользователя через запросы API
- Редактирование данных пользователя и аватара (данные пользователя получены с сервера)
- Добавление новой карточки
- Открытие попапа с изображением карточки при клике на нее
- Постановка или удаление лайка с карточки
- Удаление карточки, если она добавлена вами

### Список используемых библиотек на бэкенде:
- "eslint": "^7.22.0",
- "eslint-config-airbnb-base": "^14.2.1",
- "eslint-plugin-import": "^2.22.1",
- "nodemon": "^2.0.7"
- "bcrypt": "^5.0.1",
- "body-parser": "^1.19.0",
- "celebrate": "^14.0.0",
- "cookie-parser": "^1.4.5",
- "cors": "^2.8.5",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "express-rate-limit": "^5.2.6",
- "express-winston": "^4.1.0",
- "helmet": "^4.4.1",
- "jsonwebtoken": "^8.5.1",
- "mongoose": "^5.12.2",
- "validator": "^13.5.2",
- "winston": "^3.3.3"

### Развёртывание:
- Клонировать репозиторий командой
```
git clone https://github.com/nikolaevfo/react-mesto-api-full.git
```
- Установить сторонние библиотеки командой npm i
- Запустить вертуальный сервер командой npm run dev
- Для работы с проектом у вас должен быть установлен Node.js - https://nodejs.org/en/download/
