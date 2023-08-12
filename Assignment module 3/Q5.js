function doubleNumbers(numbers) {
    const doubledArray = numbers.map(number => number * 2);
    return doubledArray;
  }
  //eample no 1
  const numbers = [3, 6, 9, 12, 15];
  console.log(doubleNumbers(numbers));