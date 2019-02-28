import test from 'ava';
import { bubbleSort } from './bubbleSort';

test('Bubble sort array', t => {
  const arr = [1, 4, 2, 5, 3];
  const expected = [1, 2, 3, 4, 5];
  t.deepEqual(bubbleSort(arr), expected);
});
