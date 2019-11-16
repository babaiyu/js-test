let A = [1, 7, 13, 15];
let B = [1, 4, 5, 9, 20];

function mergeShort(valueA, valueB) {
  let array = [], done = false;

  array = [...valueA, ...valueB];

  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    };
  };

  return array;
};

console.log('A = ', A);
console.log('B = ', B);
console.log('Result after merged & sorted = ',mergeShort(A, B));
