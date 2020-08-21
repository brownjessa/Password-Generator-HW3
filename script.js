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
  // require User Input and make sure user cannot just put nothing in and continue
  if (!enter) {
    alert("This needs a value");
    // Make sure it is 8-128 characters
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Required password length: 8-128 characters."));
    // Make sure user knows password requirements in order to continue
  } else {
    yesNumber = confirm("Will you include numbers?");
    yesCharacter = confirm("Will you use special characters such as: !.$#?");
    yesUppercase = confirm("Will you use upper case letters?");
    yesLowercase = confirm("Will you use lower case letters?");
  }
  // If user uses all good options they can continue
  if (!yesCharacter && !yesNumber && !yesUppercase && !yesLowercase) {
    choices = alert("Please enter a criteria!");
  } else if (yesCharacter && yesNumber && yesUppercase && yesLowercase) {
    choices = spCharacter.concat(number, alpha, alpha2);
  } else if (yesCharacter && yesNumber && yesUppercase) {
    choices = spCharacter.concat(number, alpha2);
  } else if (yesCharacter && yesNumber && yesLowercase) {
    choices = spCharacter.concat(number, alpha);
  } else if (yesCharacter && yesLowercase && yesUppercase) {
    choices = spCharacter.concat(alpha, alpha2);
  } else if (yesNumber && yesLowercase && yesUppercase) {
    choices = number.concat(alpha, alpha2);
  } else if (yesCharacter && yesNumber) {
    choices = spCharacter.concat(number);
  } else if (yesCharacter && yesLowercase) {
    choices = spCharacter.concat(alpha);
  } else if (yesCharacter && yesUppercase) {
    choices = spCharacter.concat(alpha2);
  } else if (yesLowercase && yesNumber) {
    choices = alpha.concat(number);
  } else if (yesLowercase && yesUppercase) {
    choices = alpha.concat(alpha2);
  } else if (yesNumber && yesUppercase) {
    choices = number.concat(alpha2);
  } else if (yesCharacter) {
    choices = spCharacter;
  } else if (yesNumber) {
    choices = number;
  } else if (yesLowercase) {
    choices = alpha;
    // Make sure user can use spaces
  } else if (yesUppercase) {
    choices = space.concat(alpha2);
  }
  var password = [];
  // Use i to make random selection
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // Make it return the password
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
