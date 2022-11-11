const swap = (a, b) => {
  return [b, a];
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { swap, sleep };
