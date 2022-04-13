const inverseCaptcha = (numString) => {
  if (numString.length === 1) return 0;
  let total = 0;
  const steps = numString.length / 2;
  let currNum;
  let prevNum;
  for (let i = 0; i < numString.length; i++) {
    currNum = numString[i];

    if (!numString[i - steps]) {
      prevNum = numString[numString.length - (steps - i)];
    } else {
      prevNum = numString[i - steps];
    }
    if (currNum === prevNum) total += +currNum;
  }
  return total;
};

// const inverseCaptcha = (numString) => {
//   if (numString.length === 1) return 0;
//   let total = 0;

//   let currNum;
//   let prevNum;
//   for (let i = 0; i < numString.length; i++) {
//     currNum = numString[i];
//     if (i !== 0) prevNum = numString[i - 1];
//     if (currNum === prevNum) {
//       total += +currNum;
//     }
//   }
//   if (numString.length > 2) {
//     if (numString[0] === numString[numString.length - 1]) {
//       total += +numString[0];
//     }
//   }
//   return total;
// };

module.exports = inverseCaptcha;
