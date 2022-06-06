//Configuración de express

import express from 'express';
//const express = require('express');
import bodyParser from 'body-parser';
import indexRoutes from './routes/index.routes';

const app = express();

require('./database');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(require('./routes/index.routes'));
app.use(indexRoutes);

export default app;
