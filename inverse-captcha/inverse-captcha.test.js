const inverseCaptcha = require('./inverse-captcha');
const fs = require('fs/promises');

// describe('inverseCaptcha', () => {
//   test('finds total when passed less than 5 digits', () => {
//     expect(inverseCaptcha('1')).toBe(0);
//     expect(inverseCaptcha('11')).toBe(1);
//     expect(inverseCaptcha('1122')).toBe(3);
//   });
//   test('checks if the first digit and last are the same - circular string', () => {
//     expect(inverseCaptcha('91212129')).toBe(9);
//   });
//   test('bigger nums', () => {
//     expect(inverseCaptcha('77736991856689')).toBe(29);
//   });
//   test('uses official input', async () => {
//     const input = await fs.readFile('./inverse-captcha/num.txt', 'utf-8');
//     console.log(inverseCaptcha(input));
//   });
// });

// Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list. That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your list has an even number of elements.

// For example:

// 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
// 1221 produces 0, because every comparison is between a 1 and a 2.
// 123425 produces 4, because both 2s match each other, but no other digit has a match.
// 123123 produces 12.
// 12131415 produces 4.
// Remember! The list is circular!

describe('inverseCaptcha with added limitations', () => {
  test('finds total when passed less than 5 digits', () => {
    expect(inverseCaptcha('1212')).toBe(6);
    expect(inverseCaptcha('1221')).toBe(0);
  });
  test('finds total when passed bigger nums', () => {
    expect(inverseCaptcha('123425')).toBe(4);
    expect(inverseCaptcha('123123')).toBe(12);
    expect(inverseCaptcha('12131415')).toBe(4);
  });
  test('uses official input', async () => {
    const input = await fs.readFile('./inverse-captcha/num.txt', 'utf-8');

    expect(inverseCaptcha(input)).toBe(1284);
  });
});
