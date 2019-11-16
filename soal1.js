let A = [4, 2, 1, 5];

function arrayDiff(data) {
  let array = [], result = [];

  for (var i = 0; i < data.length; i++) {
    let value = data[i];
    if (array[value] === undefined) {
      array[value] = true;
      result.push(value);
    } else {
      null
    }
  };

  return result;
};

console.log('Array A is', A);
console.log('Maximum difference of Array A is', arrayDiff(A).length);
console.log(arrayDiff(A));
