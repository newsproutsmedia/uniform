const logger = require('../logging/logger');

module.exports = (app) => {
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
};
