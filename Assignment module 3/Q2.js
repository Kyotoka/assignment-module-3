const findMaxNumber = numbers => {
  if (numbers.length === 0) {
    return null;
  }

  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
};

//example no 1
const numberlist1 = [11, 10, 6, 23, 39];
console.log(findMaxNumber(numberlist1));
//example no 2
const numberlist2 = [7, 19, 9];
console.log(findMaxNumber(numberlist2));
//example no 3
const noNumberlist = [];
console.log(findMaxNumber(noNumberlist));