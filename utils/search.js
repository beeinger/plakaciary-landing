let string =
  "ATMAATTACCAACATCMATAATTACCAACATCATAATTACCAACATCATAATTACCAACATCATC";
let pattern = "ATC";

let patterLen = pattern.length;
let stringLen = string.length;
let skip;
let res = [];

let map = new Array(65535);

for (let c = 0; c < map.length; c++) {
  map[c] = -1;
}

for (let j = 0; j < patterLen; j++) {
  map[pattern[j].charCodeAt(0)] = j;
}

for (let i = 0; i <= stringLen - patterLen; i += skip) {
  // console.log("i:", i);

  skip = 0;
  for (let j = patterLen - 1; j >= 0; j--) {
    console.log(pattern[j], string[i + j], j);

    if (pattern[j] != string[i + j]) {
      skip = Math.max(1, j - map[string[i + j].charCodeAt(0)]);

      console.log("skip:", skip);
      // console.log(j - map[string[i + j].charCodeAt(0)], string[i + j]);

      break;
    }
  }
  if (skip == 0) {
    res.push(i);
    skip++;
  }
}

console.log(res);
