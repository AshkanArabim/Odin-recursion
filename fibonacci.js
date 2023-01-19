const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("say sth: ", (resp) => {
  console.log(resp);
  readline.close();
});

function fibs(n) {}

function fibsRec() {}
