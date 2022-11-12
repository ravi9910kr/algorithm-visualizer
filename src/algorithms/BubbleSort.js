import { swap, sleep } from "./algoUtils";
import { COLORS } from "../database/DataBase";
const { RUST, VIRIDIANGREEN, FRENCHVIOLET } = COLORS;
const BubbleSort = async (arr, renderer, barWidth) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      renderer(RUST, j * barWidth, 0, barWidth, arr[j]);
      renderer(RUST, (j + 1) * barWidth, 0, barWidth, arr[j + 1]);
      await sleep(10);
      if (arr[j] > arr[j + 1]) {
        renderer(VIRIDIANGREEN, (j + 1) * barWidth, 0, barWidth, arr[j + 1]);
        await sleep(10);
        [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
        renderer(VIRIDIANGREEN, j * barWidth, 0, barWidth, arr[j]);
        renderer(COLORS.RUST, (j + 1) * barWidth, 0, barWidth, arr[j + 1]);
      }
      await sleep(100);
      renderer(FRENCHVIOLET, j * barWidth, 0, barWidth, arr[j]);
      await sleep(100);
    }
    renderer(
      VIRIDIANGREEN,
      (len - 1 - i) * barWidth,
      0,
      barWidth,
      arr[len - i - 1]
    );
    if (len - i < len)
      renderer(
        VIRIDIANGREEN,
        (len - i) * barWidth,
        0,
        barWidth,
        arr[len - i - 1]
      );
  }
  return arr;
};
export { BubbleSort };
