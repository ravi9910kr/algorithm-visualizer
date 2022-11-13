import { COLORS, TIME } from "../database/DataBase";
import { swap, sleep } from "./algoUtils";

const InsertionSort = async (arr, renderer, barWidth) => {
  const len = arr.length,
    waitTime = TIME / len;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = swap(arr[j - 1], arr[j]);
        await sleep(waitTime);
        renderer(COLORS.RUST, (j - 1) * barWidth, 0, barWidth, arr[j - 1]);
    }
    renderer(COLORS.AQUAMARINE, j * barWidth, 0, barWidth, arr[j]);
      renderer(COLORS.AQUAMARINE, 0, 0, barWidth, arr[0]);
    }
  }
  return arr;
};
export default InsertionSort;
