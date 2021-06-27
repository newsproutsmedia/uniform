const request = require('supertest');
const app = require('../../app');

describe('api test /test', () => {
  it('should respond with 200 status to GET method', async () => {
    const response = await request(app)
      .get('/test');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with 404 status to invalid route', async () => {
    const response = await request(app)
      .get('/invalid');
    expect(response.statusCode).toBe(404);
  });
});
