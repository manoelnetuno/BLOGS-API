const express = require('express');
const { loginroutes, categoryRoutes } = require('./routes');
const { userRoutes } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send('hello world');
});

app.use(express.json());

app.use('/login', loginroutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
