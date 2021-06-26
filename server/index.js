const express = require('express');
const logger = require('./logging/logger');
const httpLogger = require('./logging/httpLogger');
const { errorHandlers } = require('./handlers/error.handlers');

const { logErrors, errorHandler } = errorHandlers;

// const path = require('path');

const app = express();

app.use(httpLogger);

// a test route to make sure we can reach the backend
// this would normally go in a routes file
app.get('/test', (req, res) => {
  logger.debug('This is the "/test" route.');
  res.status(200).send('Welcome to the backend!');
});

// testing to make sure the error handler works
app.get('/errorHandler', (req, res, next) => {
  try {
    throw new Error('Error!');
  } catch (error) {
    next(error);
  }
});

app.use(logErrors);
app.use(errorHandler);

// Set the port that the server is running on
const port = process.env.PORT || 8080;
app.listen(port);

logger.info(`App is listening on port ${port}`);
