// Declare variables
var enter;
var yesNumber;
var yesCharacter;
var yesUppercase;
var yesLowercase;

spCharacter = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
space = [];
var choices;
// Create conversion for Uppers
var toUpper = function (x) {
  return x.toUpperCase();
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
alpha2 = alpha.map(toUpper);
var get = document.querySelector("#generate");
// OnClick Pop-Up
get.addEventListener("click", function () {
  ps = writePassword();
  document.getElementById("password").placeholder = ps;
});
// Write password to the #password input
function writePassword() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    enter = parseInt(
      prompt(
        "How long would you like your password to be? Please pick 8-128 characters."
      )
    );
  