function capitalize(string) {
  return string.split("")[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

function Calculator() {
  return {
    add,
    subtract,
    divide,
    multiply,
  };

  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }
}

function caesarCipher(string, cipher) {
  string = string.split("");
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    if (cipher > 26) {
      return "Enter a valid cipher value bw 1 - 26";
    }
    if (
      (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) ||
      (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90)
    ) {
      if (
        (string[i].charCodeAt() >= 97 &&
          string[i].charCodeAt() <= 122 &&
          string[i].charCodeAt() + cipher > 122) ||
        (string[i].charCodeAt() >= 65 &&
          string[i].charCodeAt() <= 90 &&
          string[i].charCodeAt() + cipher > 90)
      ) {
        string[i] = String.fromCharCode(string[i].charCodeAt() - 26 + cipher);
      } else {
        string[i] = String.fromCharCode(string[i].charCodeAt() + cipher);
      }
    }
  }

  // string.forEach((element) => {
  //   if (
  //     (element >= "a" && element <= "z") ||
  //     (element >= "A" && element >= "Z")
  //   ) {
  //     if (element + cipher > "z" || element + cipher > "Z") {
  //       string[string.indexOf(element)] = element - 26 + cipher;
  //     } else {
  //       string[string.indexOf(element)] = element + cipher;
  //     }
  //   }
  // });

  return string.join("");
}

function analyzeArray(array) {
  let length = array.length;
  let avg =
    array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    length;
  let max = Math.max(...array);
  let min = Math.min(...array);
  return {
    length,
    avg,
    max,
    min,
  };
}

console.log(capitalize("hello, World!"));
let calculate = Calculator();
module.exports = {
  capitalize,
  reverseString,
  calculate,
  caesarCipher,
  analyzeArray,
};
