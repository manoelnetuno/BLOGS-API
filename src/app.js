const express = require('express');
const { loginroutes } = require('./routes');
const authMiddleware = require('./middleware/authMiddleware');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send('hello world');
});

app.use(express.json());

app.use('/login', loginroutes);
app.use(authMiddleware);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
