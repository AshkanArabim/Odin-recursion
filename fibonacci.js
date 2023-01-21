const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter length of fibonacci sequence: ", (resp) => {
  console.log(fibsRec(resp));
  readline.close();
});

function fibs(n) {
  let el1 = 0;
  let el2 = 1;
  let output = [el1, el2];
  for (let i = 2; i < n; i++) {
    let temp = el1 + el2;
    el1 = el2;
    el2 = temp;
    output.push(el2);
  }
  return output;
}

function fibsRec(n) {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(n - 1);
    return arr.concat(arr[arr.length - 1] + arr[arr.length - 2]);
  }
}
