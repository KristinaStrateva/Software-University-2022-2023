const express = require('express');
const path = require('path');

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
}

module.exports = expressConfigurator;