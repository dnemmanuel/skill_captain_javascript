let givNum = 5;

const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Please Enter a Number: `, givNum => {
  if (givNum == 0 || givNum < 0) {
    console.log("The given number is invalid");
  } else {
    for (i = 1; i <= 10; i++) {
      console.log(i * givNum);
    }
  }
  readline.close();
});
