const request = require('supertest');
const app = require('../../app');

describe('api test /test', () => {
  it('should respond with 200 status to GET method', (done) => {
    request(app)
      .get('/test')
      .expect(200)
      .end(done);
  });

  it('should respond with 200 status to any route and serve HTML', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200)
      .end(done);
  });
});
