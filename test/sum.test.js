import { sum } from '../src/sum.js';
import { expect, test } from 'vitest';

test('sum works correctly', () => {
  expect(sum(2, 3)).toBe(5);
});
