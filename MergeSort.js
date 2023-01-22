// generate raondom int array with length 40
let testArray = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
console.log(testArray);
const result = mergeSort(testArray);
console.log(result);

function mergeSort(arr) {
  const len = arr.length;
  const half = Math.floor(len / 2);
  let sorted = [];
  if (len == 1) {
    //base case
    return arr;
  } else {
    // recursive case
    // sort left side
    const leftArr = mergeSort(arr.slice(0, half));

    // sort right side
    const rightArr = mergeSort(arr.slice(half, len));

    // combine
    while (leftArr[0] !== undefined && rightArr[0] !== undefined) {
      sorted.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
    }
    sorted = sorted.concat(leftArr[0] !== undefined ? leftArr : rightArr);

    return sorted;
  }
}
