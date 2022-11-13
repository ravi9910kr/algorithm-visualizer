import { swap, sleep } from "./algoUtils";
import { COLORS, TIME } from "../database/DataBase";
const { RUST, VIRIDIANGREEN, FRENCHVIOLET } = COLORS;
const BubbleSort = async (arr, renderer, barWidth) => {
  const len = arr.length,
    waitTime = TIME / len;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
        renderer(COLORS.RUST, (j + 1) * barWidth, 0, barWidth, arr[j + 1]);
      }
      renderer(FRENCHVIOLET, j * barWidth, 0, barWidth, arr[j]);
      await sleep(waitTime);
    }
    renderer(
      VIRIDIANGREEN,
      (len - 1 - i) * barWidth,
      0,
      barWidth,
      arr[len - i - 1]
    );
  }
  return arr;
};
export { BubbleSort };
