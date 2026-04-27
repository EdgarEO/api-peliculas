const express = require('express');
const app = express();
const sequelize = require('./db');

const peliculasRoutes = require('./routes/peliculas.routes');
const logger = require('./middlewares/logger');
const validarApiKey = require('./middlewares/apiKey');

app.use(express.json());
app.use(logger);
app.use(validarApiKey);

app.use('/peliculas', peliculasRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
});