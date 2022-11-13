import { sleep } from "./algoUtils";
import { COLORS, TIME } from "../database/DataBase";
const BinarySearch = async (arr, target, renderer, barWidth) => {
  const waitTime = TIME / arr.length;
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    renderer(COLORS.RUST, barWidth * mid, 0, barWidth, arr[mid]);
    if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      renderer(COLORS.BLUEGREEN, barWidth * mid, 0, barWidth, arr[mid]);
      return mid;
    }
    await sleep(waitTime);
  }
  renderer("#00000066", 0, 0, 1080, 720);
  return -1;
};
export { BinarySearch };
