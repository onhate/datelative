import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isValid, relativeToDate } from './index.js';

describe('datelative', () => {
  describe('Invalid expressions', () => {
    it('should throw an error if the expression is not a string', () => {
      assert.throws(() => relativeToDate(2), {
        name: 'TypeError',
        message: 'The expression should be a string'
      });
    });

    it('should throw an error if the expression is not a valid expression', () => {
      assert.throws(() => relativeToDate('2'), {
        name: 'Error',
        message: 'The expression is not a valid expression'
      });
    });
  });

  describe('Valid expressions', () => {
    [
      ['+2 days', 2 * 24 * 60 * 60 * 1000],
      ['-2 days', -2 * 24 * 60 * 60 * 1000],
      ['+2 weeks', 2 * 7 * 24 * 60 * 60 * 1000],
      ['-2 weeks', -2 * 7 * 24 * 60 * 60 * 1000],
      ['+2 months', 2 * 30 * 24 * 60 * 60 * 1000],
      ['-2 months', -2 * 30 * 24 * 60 * 60 * 1000],
      ['+2 years', 2 * 365 * 24 * 60 * 60 * 1000],
      ['-2 years', -2 * 365 * 24 * 60 * 60 * 1000],
      ['+2 quarters', 2 * 365 / 4 * 24 * 60 * 60 * 1000],
      ['-2 quarters', -2 * 365 / 4 * 24 * 60 * 60 * 1000],
      ['+2 milliseconds', 2],
      ['-2 milliseconds', -2],
      ['+2 seconds', 2 * 1000],
      ['-2 seconds', -2 * 1000],
      ['+2 minutes', 2 * 60 * 1000],
      ['-2 minutes', -2 * 60 * 1000],
      ['+2 hours', 2 * 60 * 60 * 1000],
      ['-2 hours', -2 * 60 * 60 * 1000],

      ['2 days', 2 * 24 * 60 * 60 * 1000],
      ['2 weeks', 2 * 7 * 24 * 60 * 60 * 1000],
      ['2 months', 2 * 30 * 24 * 60 * 60 * 1000],
      ['2 years', 2 * 365 * 24 * 60 * 60 * 1000],
      ['2 quarters', 2 * 365 / 4 * 24 * 60 * 60 * 1000],
      ['2 milliseconds', 2],
      ['2 seconds', 2 * 1000],
      ['2 minutes', 2 * 60 * 1000],
      ['2 hours', 2 * 60 * 60 * 1000],

      ['+2days', 2 * 24 * 60 * 60 * 1000],
      ['-2days', -2 * 24 * 60 * 60 * 1000],
      ['+2weeks', 2 * 7 * 24 * 60 * 60 * 1000],
      ['-2weeks', -2 * 7 * 24 * 60 * 60 * 1000],
      ['+2months', 2 * 30 * 24 * 60 * 60 * 1000],
      ['-2months', -2 * 30 * 24 * 60 * 60 * 1000],
      ['+2years', 2 * 365 * 24 * 60 * 60 * 1000],
      ['-2years', -2 * 365 * 24 * 60 * 60 * 1000],
      ['+2quarters', 2 * 365 / 4 * 24 * 60 * 60 * 1000],
      ['-2quarters', -2 * 365 / 4 * 24 * 60 * 60 * 1000],
      ['+2milliseconds', 2],
      ['-2milliseconds', -2],
      ['+2seconds', 2 * 1000],
      ['-2seconds', -2 * 1000],
      ['+2minutes', 2 * 60 * 1000],
      ['-2minutes', -2 * 60 * 1000],
      ['+2hours', 2 * 60 * 60 * 1000],
      ['-2hours', -2 * 60 * 60 * 1000],

      // the other units
      ['+2ms', 2],
      ['-2ms', -2],
      ['+2s', 2 * 1000],
      ['-2s', -2 * 1000],
      ['+2min', 2 * 60 * 1000],
      ['-2min', -2 * 60 * 1000],
      ['+2hr', 2 * 60 * 60 * 1000],
      ['-2hr', -2 * 60 * 60 * 1000],
      ['+2d', 2 * 24 * 60 * 60 * 1000],
      ['-2d', -2 * 24 * 60 * 60 * 1000],
      ['+2w', 2 * 7 * 24 * 60 * 60 * 1000],
      ['-2w', -2 * 7 * 24 * 60 * 60 * 1000],
      ['+2M', 2 * 30 * 24 * 60 * 60 * 1000],
      ['-2M', -2 * 30 * 24 * 60 * 60 * 1000],
      ['+2y', 2 * 365 * 24 * 60 * 60 * 1000],
      ['-2y', -2 * 365 * 24 * 60 * 60 * 1000],
      ['+2q', 2 * 365 / 4 * 24 * 60 * 60 * 1000],
      ['-2q', -2 * 365 / 4 * 24 * 60 * 60 * 1000],

      ['+2 ms', 2],
      ['-2 ms', -2],
      ['+2 s', 2 * 1000],
      ['-2 s', -2 * 1000],
      ['+2 min', 2 * 60 * 1000],
      ['-2 min', -2 * 60 * 1000],
      ['+2 hr', 2 * 60 * 60 * 1000],
      ['-2 hr', -2 * 60 * 60 * 1000],
      ['+2 d', 2 * 24 * 60 * 60 * 1000],
      ['-2 d', -2 * 24 * 60 * 60 * 1000],
      ['+2 w', 2 * 7 * 24 * 60 * 60 * 1000],
      ['-2 w', -2 * 7 * 24 * 60 * 60 * 1000],
      ['+2 M', 2 * 30 * 24 * 60 * 60 * 1000],
      ['-2 M', -2 * 30 * 24 * 60 * 60 * 1000],
      ['+2 y', 2 * 365 * 24 * 60 * 60 * 1000],
      ['-2 y', -2 * 365 * 24 * 60 * 60 * 1000],
      ['+2 q', 2 * 365 / 4 * 24 * 60 * 60 * 1000],
      ['-2 q', -2 * 365 / 4 * 24 * 60 * 60 * 1000]
    ].forEach(([expression, millis]) => {
      it(expression, () => {
        const reference = new Date();
        const expected = new Date(reference.getTime() + millis);

        assert.deepEqual(isValid(expression), true);
        assert.deepEqual(relativeToDate(expression, reference), expected);
      });
    });
  });
});