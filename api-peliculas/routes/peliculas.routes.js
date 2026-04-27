const express = require('express');
const router = express.Router();
const service = require('../services/peliculas.service');

router.get('/', async (req, res) => {
  const data = await service.getAll();
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const data = await service.getById(req.params.id);
  res.json(data);
});

router.post('/', async (req, res) => {
  const data = await service.create(req.body);
  res.json(data);
});

router.put('/:id', async (req, res) => {
  const data = await service.update(req.params.id, req.body);
  res.json(data);
});

router.delete('/:id', async (req, res) => {
  const data = await service.remove(req.params.id);
  res.json({ deleted: data });
});

module.exports = router;