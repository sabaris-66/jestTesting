import {
  capitalize,
  reverseString,
  calculate,
  caesarCipher,
  analyzeArray,
} from "./index";
// const capitalize = require("./index");

test("capitalize abc to Abc", () => {
  expect(capitalize("abc")).toBe("Abc");
});

test("reverse string", () => {
  expect(reverseString("Abcd")).toBe("dcbA");
});

test("calculate function", () => {
  expect(calculate.add(1, 2)).toBe(3);
  expect(calculate.subtract(1, 2)).toBe(-1);
  expect(calculate.divide(4, 2)).toBe(2);
  expect(calculate.multiply(1, 2)).toBe(2);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("Hello, world!", 3));
});
