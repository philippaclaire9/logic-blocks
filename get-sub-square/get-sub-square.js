const getSubSquare = (matrix, xStartIndex, yStartIndex) => {
  if (!matrix) return 'Please provide a matrix';
  if (typeof xStartIndex !== 'number' && !xStartIndex)
    return 'Please provide an xStartIndex';
  if (typeof yStartIndex !== 'number' && !yStartIndex)
    return 'Please provide a yStartIndex';

  const subSquare = [];
  for (let row = yStartIndex; row < yStartIndex + 3; row++) {
    subSquare.push(matrix[row].slice(xStartIndex, xStartIndex + 3));
  }
  return subSquare;

  //   matrix.forEach((array, arrayIndex) => {
  //     if (arrayIndex === xStartIndex) {
  //       const subArrayOne = [];
  //       array.forEach((element, elementIndex) => {
  //         if (elementIndex === yStartIndex) {
  //           subArrayOne.push(element);
  //         }
  //         if (elementIndex === yStartIndex + 1) {
  //           subArrayOne.push(element);
  //         }
  //         if (elementIndex === yStartIndex + 2) {
  //           subArrayOne.push(element);
  //         }
  //       });
  //       console.log(subArrayOne);
  //       subSquare.push(subArrayOne);
  //     }
  //     if (arrayIndex === xStartIndex + 1) {
  //       const subArrayTwo = [];
  //       array.forEach((element, elementIndex) => {
  //         if (elementIndex === yStartIndex) {
  //           subArrayTwo.push(element);
  //         }
  //         if (elementIndex === yStartIndex + 1) {
  //           subArrayTwo.push(element);
  //         }
  //         if (elementIndex === yStartIndex + 2) {
  //           subArrayTwo.push(element);
  //         }
  //       });
  //       subSquare.push(subArrayTwo);
  //     }
  //     if (arrayIndex === xStartIndex + 2) {
  //       const subArrayThree = [];
  //       array.forEach((element, elementIndex) => {
  //         if (elementIndex === yStartIndex) {
  //           subArrayThree.push(element);
  //         }
  //         if (elementIndex === yStartIndex + 1) {
  //           subArrayThree.push(element);
  //         }
  //         if (elementIndex === yStartIndex + 2) {
  //           subArrayThree.push(element);
  //         }
  //       });
  //       subSquare.push(subArrayThree);
  //     }
  //   });
  //console.log(subSquare);

  //   return subSquare;

  //if (!matrix.length) return 'Subsquare exceeds the bounds of the matrix';
};

//if xStartIndex === arrayIndex -> loop through array
//within array, if yStartIndex === elementIndex, take that element and subsequent 2 elements
//then for 2 more loops, take yStartIndex === elementIndex and subsequent 2 elements

module.exports = getSubSquare;

//
