// generate raondom int array with length 40
let testArray = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
console.log(testArray);
const result = mergeSort(testArray);
console.log(result);

function mergeSort(arr) {
  const len = arr.length;
  const half = Math.floor(len / 2);
  let sorted = [];
  //base case
  if (len == 1) {
    return arr;
  } else {
    // sort left side
    const leftArr = mergeSort(arr.slice(0, half));

    // sort right side
    const rightArr = mergeSort(arr.slice(half, len));

    // combine
    while (leftArr[0] !== undefined && rightArr[0] !== undefined) {
      sorted.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
    }
    sorted = sorted.concat(leftArr[0] !== undefined ? leftArr : rightArr); // this bitch didn't work

    return sorted;
  }
}
