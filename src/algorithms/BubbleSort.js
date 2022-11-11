import { swap } from "./algoUtils";
const BubbleSort = (arr, renderer) => {
  // console.log(swap);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
      }
    }
  }
  renderer(arr);
  return arr;
};
export { BubbleSort };
