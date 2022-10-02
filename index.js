// файл index.js

const express = require("express");

const app = express();

app.use(require('./routes/messages.route'));
app.use(require('./routes/contacts.route'))

app.listen(4000, () => {
    console.log('Сервер запущен')
});