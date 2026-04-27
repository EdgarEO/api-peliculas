const validarApiKey = (req, res, next) => {
  const key = req.headers['api-key'];

  if (key !== '12345') {
    return res.status(403).json({ error: 'API KEY inválida' });
  }

  next();
};

module.exports = validarApiKey;