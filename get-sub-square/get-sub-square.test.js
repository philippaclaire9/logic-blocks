const getSubSquare = require('./get-sub-square');

describe('getSubSquare', () => {
  it('returns appropriate message when missing argument', () => {
    const matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    expect(getSubSquare(undefined, 1, 2)).toBe('Please provide a matrix');
    expect(getSubSquare(matrix, undefined, 1)).toBe(
      'Please provide an xStartIndex'
    );
    expect(getSubSquare(matrix, 1, undefined)).toBe(
      'Please provide a yStartIndex'
    );
  });
  it('returns 3*3 subsquare when passed 3*3 matrix and 0, 0', () => {
    const matrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];
    const copyMatrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];
    const result = getSubSquare(matrix, 0, 0);
    expect(result).toEqual(copyMatrix);
    expect(matrix).toEqual(copyMatrix);
    expect(result).not.toBe(matrix);
    expect(result[0]).not.toBe(matrix[0]);
    //tests that the inner arrays also have different references
  });
  it('returns 3*3 subsquare when passed a matrix and 1, 1', () => {
    const matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    const copyMatrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    const expected = [
      [7, 2, 1],
      [9, 8, 3],
      [5, 9, 7],
    ];

    const result = getSubSquare(matrix, 1, 1);
    expect(result).toEqual(expected);
    expect(matrix).toEqual(copyMatrix);
    expect(result).not.toBe(matrix);
  });

  xit('returns err message when subsquare cannot be extracted', () => {
    let matrix = [];

    expect(getSubSquare(matrix, 0, 0)).toBe(
      'Subsquare exceeds the bounds of the matrix'
    );
    matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
    ];
    expect(getSubSquare(matrix, 1, 1)).toBe(
      'Subsquare exceeds the bounds of the matrix'
    );
  });
});
