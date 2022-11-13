import { sleep } from "./algoUtils";
import { COLORS } from "../database/DataBase";
const BinarySearch = async (arr, target, renderer, barWidth) => {
  console.log(arr, target);
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    await sleep(300);
    const mid = lo + Math.floor((hi - lo) / 2);
    renderer(COLORS.RUST, barWidth * mid, 0, barWidth, arr[mid]);
    if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      console.log(mid);
      renderer(COLORS.BLUEGREEN , barWidth * mid, 0, barWidth, arr[mid]);
      return mid;
    }
  }
  renderer("#00000066", 0, 0, 1080, 720);
  return -1;
};
export { BinarySearch };
