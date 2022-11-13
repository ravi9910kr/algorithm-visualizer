import { sleep } from "./algoUtils";
import { COLORS, TIME } from "../database/DataBase";
const LinearSearch = async (arr, target, renderer, barWidth) => {
  const waitTime = TIME / arr.length;
  for (let i = 0; i < arr.length; i++) {
    renderer(COLORS.GAMBOGE, i * barWidth, 0, barWidth, arr[i]);
    if (arr[i] === target) {
      renderer(COLORS.AQUAMARINE, i * barWidth, 0, barWidth, arr[i]);
      return i;
    }
    await sleep(waitTime);
    renderer(COLORS.FRENCHVIOLET, i * barWidth, 0, barWidth, arr[i]);
  }
  return -1;
};
export { LinearSearch };
