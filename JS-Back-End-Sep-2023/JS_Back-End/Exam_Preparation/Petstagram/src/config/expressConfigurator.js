const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {setAuthentication} = require('../middlewares/authMiddleware');

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(setAuthentication);
}

module.exports = expressConfigurator;