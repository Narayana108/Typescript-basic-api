import test from 'ava';
import { sortArray } from './app';

test('Flatten, remove null and sort array', t => {
  const arr = [null, 1, 2, undefined, [[4, 6], 5], 3];
  const expected = [1, 2, 3, 4, 5, 6];
  t.deepEqual(sortArray(arr), expected);
});
