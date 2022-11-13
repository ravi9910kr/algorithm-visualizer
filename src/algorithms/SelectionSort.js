import { COLORS } from "../database/DataBase";
import { sleep, swap } from "./algoUtils";

const SelectionSort = async (arr, renderer, barWidth) => {
  let start = -1,
    ind = 0,
    len = arr.length;
  for (let i = 0; i < len; i++) {
    let minValue = 720;
    for (let j = start + 1; j < len; j++) {
      if (minValue >= arr[j]) {
        minValue = arr[j];
        ind = j;
        renderer(COLORS.RUST, j * barWidth, 0, barWidth, arr[j]);
        await sleep(10);
        renderer(COLORS.FRENCHVIOLET, ind * barWidth, 0, barWidth, minValue);
      }
    }
    ++start;
    [arr[start], arr[ind]] = swap(arr[start], arr[ind]);
    renderer(COLORS.BLUEGREEN, start * barWidth, 0, barWidth, arr[start]);
    await sleep(10);
  }
  return arr;
};

export { SelectionSort };
