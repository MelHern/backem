"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
var path = require('path');
// Create a new express application instance
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var configuracoinesRouter = require('./routes/configuraciones');
var facturasVentas = require('./routes/facturasVentas');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/configuraciones', configuracoinesRouter);
app.use('/facturas', facturasVentas);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    //next(createError(404));
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
