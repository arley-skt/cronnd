const express = require('express');
const pessoas = require('./pessoasRoute.js');
const pedidos = require('./pedidosRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    pedidos,

  );
};