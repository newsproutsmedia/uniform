const express = require('express');
const logger = require('./logging/logger');
const httpLogger = require('./logging/httpLogger');
const { errorHandlers } = require('./handlers/error.handlers');

const { logErrors, errorHandler } = errorHandlers;

const app = express();

app.use(httpLogger);

require('./routes/index.routes')(app);

app.use(logErrors);
app.use(errorHandler);

// Set the port that the server is running on
const port = process.env.PORT || 8080;
app.listen(port);

logger.info(`App is listening on port ${port}`);
