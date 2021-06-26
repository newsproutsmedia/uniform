const logger = require('../logging/logger');

const errorHandlers = {
  errorHandler(err, req, res, next) {
    res.status(500).send('Error!');
  },
  logErrors(err, req, res, next) {
    logger.error(err.stack);
  },
};

module.exports = { errorHandlers };
