import { Router } from 'express';

const routes = new Router();

routes.get('/healthCheck', (req, res) => {res.json("API is Running")});

module.exports = routes;