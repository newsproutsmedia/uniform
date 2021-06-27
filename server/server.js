const app = require('./app');
const logger = require('./logging/logger');

// Set the port that the server is running on
const port = process.env.PORT || 8080;
app.listen(port);

logger.info(`App is listening on port ${port}`);