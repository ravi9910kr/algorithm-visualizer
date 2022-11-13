import { COLORS, TIME } from "../database/DataBase";
import { sleep, swap } from "./algoUtils";

const SelectionSort = async (arr, renderer, barWidth) => {
  let start = -1,
    len = arr.length,
    waitTime = TIME / len;
  for (let i = 0; i < len; i++) {
    let minValue = arr[start + 1],
      ind = start + 1;
    for (let j = start + 1; j < len; j++) {
      if (minValue >= arr[j]) {
        renderer(COLORS.RUST, j * barWidth, 0, barWidth, arr[j]);
        minValue = arr[j];
        ind = j;
        await sleep(waitTime);
      }
      renderer(COLORS.FRENCHVIOLET, ind * barWidth, 0, barWidth, arr[ind]);
    }
    ++start;
    [arr[start], arr[ind]] = swap(arr[start], arr[ind]);
    renderer(COLORS.FRENCHVIOLET, ind * barWidth, 0, barWidth, arr[ind]);
    renderer(COLORS.BLUEGREEN, start * barWidth, 0, barWidth, arr[start]);

    await sleep(10);
  }
  return arr;
};

export { SelectionSort };
