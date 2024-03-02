# Datelative

I wrote it '-5m' ago.

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/onhate/datelative/ci.yaml?branch=main)
![npm](https://img.shields.io/npm/v/datelative)
![GitHub](https://img.shields.io/github/license/onhate/datelative)

Datelative is a JavaScript library that converts relative date strings to actual date objects. It's a handy tool for dealing with date and time manipulations in your JavaScript applications.

## Installation

You can install Datelative using npm:

```bash
npm install datelative
```

Or using yarn:

```bash
yarn add datelative
```

## Usage

First, import the `relativeToDate` function from the library:

```javascript
import { relativeToDate } from 'datelative';
```

Then, you can use it to convert relative date strings to date objects. Here are some examples:

```javascript
const reference = new Date(); // Optional reference date, defaults to the current date and time

// Add 2 days to the reference date
const date1 = relativeToDate('+2 days', reference);

// Subtract 2 days from the reference date
const date2 = relativeToDate('-2 days', reference);

// Add 2 weeks to the reference date
const date3 = relativeToDate('+2 weeks', reference);

// Subtract 2 weeks from the reference date
const date4 = relativeToDate('-2 weeks', reference);

// ... and so on for months, years, quarters, milliseconds, seconds, minutes, and hours
```

# Available Units

The + sign is optional and can be omitted.

The space between the number and the unit is also optional.

For example `+2 ms` is the same as `2ms`.

- +2 ms
- +2 milliseconds
- +2 s
- +2 sec
- +2 second
- +2 seconds
- +2 Second
- +2 Seconds
- +2 m
- +2 min
- +2 minute
- +2 minutes
- +2 Min
- +2 Minute
- +2 Minutes
- +2 h
- +2 hr
- +2 Hr
- +2 hour
- +2 hours
- +2 Hour
- +2 Hours
- +2 d
- +2 D
- +2 day
- +2 days
- +2 Day
- +2 Days
- +2 w
- +2 W
- +2 wk
- +2 Wk
- +2 week
- +2 weeks
- +2 Week
- +2 Weeks
- +2 M
- +2 mon
- +2 month
- +2 months
- +2 Month
- +2 Months
- +2 y
- +2 Y
- +2 yr
- +2 yrs
- +2 year
- +2 years
- +2 Year
- +2 Years
- +2 q
- +2 qr
- +2 Q
- +2 Qr
- +2 qtr
- +2 quarter
- +2 quarters
- +2 Quarter
- +2 Quarters

see [index.js](./index.js#L1) for all available units.

## Testing

This library includes a comprehensive set of tests to ensure its functionality. You can run these tests using npm:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the terms of the MIT license.
