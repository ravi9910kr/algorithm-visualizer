import { swap, sleep } from "./algoUtils";
const BubbleSort = async (arr, renderer, barWidth) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      renderer("#FF0000", j * barWidth, 0, barWidth, arr[j]);
      renderer("#FF0000", (j + 1) * barWidth, 0, barWidth, arr[j + 1]);
      await sleep(10);
      if (arr[j] > arr[j + 1]) {
        renderer("#00FF00", (j + 1) * barWidth, 0, barWidth, arr[j + 1]);
        await sleep(10);
        [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
        renderer("#00ff00", j * barWidth, 0, barWidth, arr[j]);
        renderer("#FF0000", (j + 1) * barWidth, 0, barWidth, arr[j + 1]);
      }
      await sleep(100);
      renderer("#0000ff", j * barWidth, 0, barWidth, arr[j]);
      await sleep(100);
    }
    renderer(
      "#00ff00",
      (len - 1 - i) * barWidth,
      0,
      barWidth,
      arr[len - i - 1]
    );
    if (len - i < len)
      renderer("#00ff00", (len - i) * barWidth, 0, barWidth, arr[len - i - 1]);
  }
  return arr;
};
export { BubbleSort };
