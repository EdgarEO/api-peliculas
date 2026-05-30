const express = require('express');
const app = express();
const sequelize = require('./db');

const peliculasRoutes = require('./routes/peliculas.routes');
const logger = require('./middlewares/logger');
const validarApiKey = require('./middlewares/apiKey');

app.use(express.json());

app.use(logger);

// Ruta pública
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de películas funcionando correctamente'
  });
});

// A partir de aquí se exige API Key
app.use(validarApiKey);

app.use('/peliculas', peliculasRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});