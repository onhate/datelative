const units = {
  'ms': 'milliseconds',
  'milliseconds': 'milliseconds',
  's': 'seconds',
  'sec': 'seconds',
  'second': 'seconds',
  'seconds': 'seconds',
  'Second': 'seconds',
  'Seconds': 'seconds',
  'm': 'minutes',
  'min': 'minutes',
  'minute': 'minutes',
  'minutes': 'minutes',
  'Min': 'minutes',
  'Minute': 'minutes',
  'Minutes': 'minutes',
  'h': 'hours',
  'hr': 'hours',
  'Hr': 'hours',
  'hour': 'hours',
  'hours': 'hours',
  'Hour': 'hours',
  'Hours': 'hours',
  'd': 'days',
  'D': 'days',
  'day': 'days',
  'days': 'days',
  'Day': 'days',
  'Days': 'days',
  'w': 'weeks',
  'W': 'weeks',
  'wk': 'weeks',
  'Wk': 'weeks',
  'week': 'weeks',
  'weeks': 'weeks',
  'Week': 'weeks',
  'Weeks': 'weeks',
  'M': 'months',
  'mo': 'months',
  'mon': 'months',
  'month': 'months',
  'months': 'months',
  'Month': 'months',
  'Months': 'months',
  'y': 'years',
  'Y': 'years',
  'yr': 'years',
  'yrs': 'years',
  'year': 'years',
  'years': 'years',
  'Year': 'years',
  'Years': 'years',
  'q': 'quarters',
  'qr': 'quarters',
  'Q': 'quarters',
  'Qr': 'quarters',
  'qtr': 'quarters',
  'quarter': 'quarters',
  'quarters': 'quarters',
  'Quarter': 'quarters',
  'Quarters': 'quarters'
};

const unitToMilliseconds = {
  'milliseconds': 1,
  'seconds': 1000,
  'minutes': 1000 * 60,
  'hours': 1000 * 60 * 60,
  'days': 1000 * 60 * 60 * 24,
  'weeks': 1000 * 60 * 60 * 24 * 7,
  'months': 1000 * 60 * 60 * 24 * 30, // Approximation
  'years': 1000 * 60 * 60 * 24 * 365, // Approximation
  'quarters': 1000 * 60 * 60 * 24 * 365 / 4 // Approximation
};

const parseableUnits = Object.keys(units).join('|');
const regExp = new RegExp(`([-+])?(\\d*)\\s?(${parseableUnits})$`);

/**
 * Checks if a time expression is valid
 * @param expression {string} - The time expression to check
 * @return {boolean}
 */
export function isValid(expression) {
  return regExp.test(expression);
}

/**
 * Converts a time expression to a Date object
 * @param expression {string} - The time expression to convert
 * @param currentDate {Date} - The current date to use as a reference
 * @return {Date|null}
 */
export function relativeToDate(expression, currentDate = new Date()) {
  if (typeof expression !== 'string') {
    throw new TypeError('The expression should be a string');
  }

  if (!isValid(expression)) {
    throw new Error('The expression is not a valid expression');
  }

  const match = expression.match(regExp);
  const operator = match[1] === '-' ? -1 : 1;
  const amount = parseInt(match[2]);
  const unit = units[match[3]];
  const milliseconds = amount * unitToMilliseconds[unit];

  const time = currentDate.getTime() + (operator * milliseconds);
  return new Date(time);
}
