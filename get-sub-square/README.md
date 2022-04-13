# GetSubSquare

Given a square matrix (two-dimensional array) and a xStartIndex and a yStartIndex, you must return a 3 \* 3 subsquare from the array.

For example, in the following matrix, if asked for the subsquare with start indexes of 0, 0, you would extract a two-dimensional matrix beginning from the top left hand corner of the matrix:

```javascript
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

getSubSquare(matrix, 0, 0);

// --> [ [5, 3, 4], [6, 7, 2], [1, 9, 8] ]
```

Another example:

```javascript
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

getSubSquare(matrix, 2, 5);

// --> [ [3, 9, 2], [1, 5, 3], [7, 4, 1] ]
```

### Testing Notes:

- The matrix will always be square and will always have dimensions of at least 3 \* 3

- The function should return "Please provide a matrix" if no matrix provided.

- The function should return "Please provide an xStartIndex" if none given.

- The function should return "Please provide a yStartIndex" if none given.

- The function should return "Subsquare exceeds the bounds of the matrix" if yStartIndex is too high, or if the xStartIndex is too high, and a complete 3 \* 3 subsquare cannot be extracted.
