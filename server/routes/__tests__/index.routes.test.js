const request = require('supertest');
const app = require('../../app');

describe('GET /', () => {
  it('should respond with 200 status to / endpoint and serve HTML', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200)
      .end(done);
  });
});

describe('GET /api/test', () => {
  it('should respond with 200 status', (done) => {
    request(app)
      .get('/api/test')
      .expect(200)
      .end(done);
  });
});

describe('POST /api/message', () => {
  it('should respond with 200 status and return json', (done) => {
    const testMessage = {message: "test"};
    request(app)
      .post('/api/message')
      .send(testMessage)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

