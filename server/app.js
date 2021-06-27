const express = require('express');
const path = require('path');
const httpLogger = require('./logging/httpLogger');
const { errorHandlers } = require('./handlers/error.handlers');

const { logErrors, errorHandler } = errorHandlers;

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(httpLogger);

require('./routes/index.routes')(app);

app.use(logErrors);
app.use(errorHandler);

module.exports = app;
