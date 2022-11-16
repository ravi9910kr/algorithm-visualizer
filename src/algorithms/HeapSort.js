import { sleep } from "./algoUtils";
import { COLORS, TIME } from "../database/DataBase";

let renderer = null,
  barWidth = null,
  waitTime = null;

const buildMaxHeap = async (arr) => {
  let i = Math.floor(arr.length / 2 - 1);
  while (i >= 0) {
    await heapify(arr, i, arr.length);
    i -= 1;
  }
};

const heapify = async (heap, i, max) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }
    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }
    if (index === i) {
      return;
    }

    renderer(COLORS.RUST, i * barWidth, 0, barWidth, heap[i]);
    await sleep(waitTime);
    swap(heap, i, index);
    renderer(COLORS.FRENCHVIOLET, i * barWidth, 0, barWidth, heap[i]);
    renderer(COLORS.FRENCHVIOLET, index * barWidth, 0, barWidth, heap[index]);
    i = index;
  }
};

const swap = (arr, firstItemIndex, lastItemIndex) => {
  const temp = arr[firstItemIndex];

  arr[firstItemIndex] = arr[lastItemIndex];
  arr[lastItemIndex] = temp;
};

const HeapSort = async (arr, rend, wid) => {
  const len = arr.length;
  renderer = rend;
  barWidth = wid;
  waitTime = TIME / len;

  await buildMaxHeap(arr);
  let lastElement = arr.length - 1;

  while (lastElement > 0) {
    renderer(COLORS.AQUAMARINE, 0 * barWidth, 0, barWidth, arr[0]);
    await sleep(waitTime * 2);
    swap(arr, 0, lastElement);
    renderer(
      COLORS.AQUAMARINE,
      lastElement * barWidth,
      0,
      barWidth,
      arr[lastElement]
    );
    renderer(COLORS.FRENCHVIOLET, 0, 0, barWidth, arr[0]);
    await heapify(arr, 0, lastElement);
    lastElement -= 1;
  }
  renderer(
    COLORS.AQUAMARINE,
    lastElement * barWidth,
    0,
    barWidth,
    arr[lastElement]
  );

  return arr;
};
export { HeapSort };
