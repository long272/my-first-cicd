const request = require('supertest');
const app = require('../src/app');

describe('Calculator API', () => {

  test('GET / trả về status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Calculator API is running!');
  });

  test('POST /add cộng đúng', async () => {
    const res = await request(app).post('/add').send({ a: 3, b: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(7);
  });

  test('POST /subtract trừ đúng', async () => {
    const res = await request(app).post('/subtract').send({ a: 10, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(7);
  });

  test('POST /multiply nhân đúng', async () => {
    const res = await request(app).post('/multiply').send({ a: 3, b: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(12);
  });

  test('POST /divide chia đúng', async () => {
    const res = await request(app).post('/divide').send({ a: 12, b: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(3);
  });

  test('POST /divide báo lỗi khi chia cho 0', async () => {
    const res = await request(app).post('/divide').send({ a: 5, b: 0 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Không thể chia cho 0');
  });

  test('POST /add báo lỗi khi truyền sai kiểu dữ liệu', async () => {
    const res = await request(app).post('/add').send({ a: 'abc', b: 4 });
    expect(res.statusCode).toBe(400);
  });

});