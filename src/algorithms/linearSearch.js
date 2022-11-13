import { sleep } from "./algoUtils";
import { COLORS } from "../database/DataBase";
const LinearSearch = async (arr, target, renderer, barWidth) => {
  for (let i = 0; i < arr.length; i++) {
    renderer(COLORS.GAMBOGE, i * barWidth, 0, barWidth, arr[i]);
    if (arr[i] === target) {
      renderer(COLORS.AQUAMARINE, i * barWidth, 0, barWidth, arr[i]);
      return i;
    }
    await sleep(30);
    renderer(COLORS.FRENCHVIOLET, i * barWidth, 0, barWidth, arr[i]);
  }
  return -1;
};
export { LinearSearch };
