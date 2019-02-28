import test from 'ava';
import request from 'supertest';
import { app } from './app';

test('200 | Sort array - success', async t => {
  const arr = [null, 1, 2, undefined, [[4, 6], 5], 3];
  const expected = [1, 2, 3, 4, 5, 6];

  const response = await request(app)
    .post('/')
    .send(arr);

  t.is(response.status, 200);
  t.deepEqual(response.body, expected);
});

test.only('500 | Sort array - max length', async t => {
  // Create an array with length of 10100
  const arr = Array(10100)
    .fill(null)
    .map(i => i);

  const response = await request(app)
    .post('/')
    .send(arr);

  t.is(response.status, 500);
  t.deepEqual(response.text, 'Array max length is 10 000');
});

test('500 | Sort array - invalid array', async t => {
  const arr = 'ConqueringLion';

  const response = await request(app)
    .post('/')
    .send(arr);

  t.is(response.status, 500);
  t.is(response.text, 'Invalid array');
});

test('500 | Sort array - no array', async t => {
  const response = await request(app).post('/');

  t.is(response.status, 500);
  t.is(response.text, 'Invalid array');
});
