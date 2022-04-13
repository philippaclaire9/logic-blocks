const { orderRecords } = require('./repose-record');

describe('orderRecords', () => {
  it('returns an array of nested arrays, where first element is date and second is guard', () => {
    const input = '[1518-09-10 00:54] wakes up';
    expect(orderRecords(input)).toEqual([['1518-09-10 00:54', 'wakes up']]);
  });
});
