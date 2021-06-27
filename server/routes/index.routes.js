const path = require('path');
const logger = require('../logging/logger');

module.exports = (app) => {
  app.get('/test', (req, res) => {
    logger.debug('This is the "/test" route.');
    res.status(200).send('Welcome to the backend!');
  });

  // All other GET requests not handled before will return the React app
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  });
};
