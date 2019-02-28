import test from 'ava';
import { flatten } from './flatten';

test('Flatten nested array', async t => {
  const arr = [1, 2, [[4, 6], 5], 3];
  const expected = [1, 2, 4, 6, 5, 3];
  t.deepEqual(flatten(arr), expected);
});

test('Flatten array', async t => {
  const arr = [1, 2, [4, 5], 3];
  const expected = [1, 2, 4, 5, 3];
  t.deepEqual(flatten(arr), expected);
});
