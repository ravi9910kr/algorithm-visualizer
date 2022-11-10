const BinarySearch = (arr, target) => {
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + (hi - lo) / 2;
    if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < terget) {
      lo = mid + 1;
    } else return mid;
  }
  return -1;
};
export { BinarySearch };
