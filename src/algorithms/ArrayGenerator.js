const unSortedArrayGenerator = (len) => {
  const unSortedArr = [];
  for (let i = 0; i < len; i++) {
    unSortedArr.push(Math.ceil(Math.random() * (720 - 50)) + 50);
  }
  return unSortedArr;
};
const sortedArrayGenerator = (len) => {
  const sortedArr = unSortedArrayGenerator(len);
  sortedArr.sort((a, b) => {
    return a - b;
  });
  return sortedArr;
};

export { unSortedArrayGenerator, sortedArrayGenerator };
