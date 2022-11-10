import { swap } from "./algoUtils";
const BubbleSort = (arr) => {
  // console.log(swap);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
        // const t = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = t;
      }
    }
  }
  return arr;
};
export { BubbleSort };
