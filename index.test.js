import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./index";
// const capitalize = require("./index");

test("capitalize abc to Abc", () => {
  expect(capitalize("abc")).toBe("Abc");
});
