import test from 'ava';
import { rmNull } from './rmNull';

test('Remove null and undefined values', t => {
  const arr = [1, 2, null, 5, undefined, 3];
  const expected = [1, 2, 5, 3];
  t.deepEqual(rmNull(arr), expected);
});
