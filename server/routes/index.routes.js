const logger = require('../logging/logger');

module.exports = (app) => {
  // a test route to make sure we can reach the backend
  // this would normally go in a routes file
  app.get('/test', (req, res) => {
    logger.debug('This is the "/test" route.');
    res.status(200).send('Welcome to the backend!');
  });

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.status(404).send('Not Found');
  });
};
