// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS</h1>`;

// 1. Write a js program to sort the specific words starting with a given character from the given array.

// Your are given:

//     array = [ 'apple', 'banana', 'grapes', 'orange', 'apricots', 'blueberries', 'avocado', 'cherries', 'coconut' ]
//     character = a
//     expected output = ['apple', apricots', 'avocado']
//     time = 7 - 15 min

let myArray = [
  "apple",
  "banana",
  "grapes",
  "orange",
  "apricots",
  "blueberries",
  "avocado",
  "cherries",
  "coconut"
];

function afunction(x) {
  let newArray = [];
  let newArray2 = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].slice(0, 1) === x) {
      newArray.push(myArray[i]);
    } else {
      newArray2.push(myArray[i]);
    }
  }
  return {
    Matched: newArray,
    NotMatched: newArray2
  };
}
console.log(afunction("a"));
///////////////////////////////////////////////////////////
let countryNameArr = [
  "Bangladesh",
  "Australia",
  "Romania",
  "Malaysia",
  "Uganda",
  "Denmark",
  "Austria"
];

let newArray = [];
for (let i = 0; i < countryNameArr.length; i++) {
  newArray.push(countryNameArr[i].slice(0, 1));
}
let b = newArray.toString().replace(/,/g, "");
console.log(b);
///////////////////////////////////////////////////////////

let countryName2 = [
  "Bangladesh",
  "Australia",
  "Romania",
  "Malaysia",
  "Uganda",
  "Denmark",
  "Austria"
];
let ola = "";
for (let i = 0; i < countryName2.length; i++) {
  // newArray.push(countryName[i].slice(0, 1));
  ola += countryName2[i].substr(i, 1);
}
// let b = newArray.toString().replace(/,/g, "");
// console.log(b);
console.log(ola);

//////////////////////////////////////////////////

let countryName3 = [
  "Bangladesh",
  "Australia",
  "Romania",
  "Malaysia",
  "Uganda",
  "Denmark",
  "Austria"
];
let textt = "";
for (let i = 0; i < countryName3.length; i++) {
  // newArray.push(countryName[i].slice(0, 1));
  // text += countryName[i].substr(i, 1);
  if (countryName3[i].substr(i, 1) === "a") {
    textt += countryName3[i].substr(i, 1);
  }
}
// let b = newArray.toString().replace(/,/g, "");
// console.log(b);
console.log(textt);
/////////////////////

let countryNameLast = [
  "Bangladesh",
  "Australia",
  "Romania",
  "Malaysia",
  "Uganda",
  "Denmark",
  "Austria"
];
let vowels = ["a", "e", "i", "o", "u"];
let text = "";
function findingVowels() {
  for (let i = 0; i < countryNameLast.length; i++) {
    if (vowels.includes(countryNameLast[i].toLowerCase().substr(i, 1))) {
      text += countryNameLast[i].substr(i, 1);
    } else {
      text += "N";
    }
  }
  return text;
}
console.log(findingVowels());
////////////////////////////
///////////////////////////
function newFunc() {
  let testee = "";
  for (let a of "Bangladesh") {
    if (vowels.includes(a)) {
      testee += a;
    }
  }
  return testee;
}
console.log(newFunc());

//////////////////////

let duplicatedArray = [4, 47, 9, 3, 5, 7, 8, 9, 6, 9, 5];

function findDuplicates(x) {
  let makeArr = x.slice().sort();
  let results = [];
  for (let i = 0; i < makeArr.length - 1; i++) {
    if (makeArr[i + 1] == makeArr[i]) {
      results.push(makeArr[i]);
    }
  }
  return results;
}
console.log("The duplicates are:", findDuplicates(duplicatedArray));

// const myaArray = [4, 47, 9, 3, 5, 7, 8, 9, 6, 9, 5 ];
// var result  = {};
// myaArray.forEach(function(x) { result[x] = (result[x] || 0)+1; });
// console.log(result)

function getNum(a) {
  let n = a.toString();
  let finding = n.indexOf(".");
  let dropping = n.slice(0, finding + 1);
  console.log(dropping);
  let afterdecimal = n.substr(finding + 1, 2);
  console.log(afterdecimal);
  let beforedec = n.substr(finding + 3, 1);
  if (beforedec >= 5) {
    console.log(afterdecimal++ + 1);
    console.log(dropping + afterdecimal);
  } else if (afterdecimal.length === 1 || afterdecimal.length === 0) {
    console.log(dropping + afterdecimal++ + 0);
  } else {
    console.log(n + ".00");
  }
}
getNum(20.345);
console.log("");
////////////
console.log("");
// JAVASCRIPT ASSIGNMENT
console.log("");
////////////
// Task-1

function feetToMile(feet) {
  if (feet < 1) {
    return "Input any numbers except'0' to have an output";
  }
  var mile = feet / 5280;
  return mile;
}
var result = feetToMile(10560);
console.log(result);

function mileToFeet(mile) {
  if (mile < 1) {
    return "Input any numbers except'0' to have an output";
  }
  var feet = mile * 5280;
  return feet;
}
var result = mileToFeet(1);
console.log(result);

// Task-2

function woodCalculator(chair, table, bed) {
  if ((chair, table, bed) < 1) {
    return "Please! input number except'0'";
  }
  var chairCounter = chair;
  var tableCounter = table * 3;
  var bedCounter = bed * 5;
  var totalCount = [
    chairCounter,
    tableCounter,
    bedCounter,
    chairCounter + tableCounter + bedCounter
  ]; /* Count individual and then total */
  return totalCount;
}
var result = woodCalculator(5, 3, 2);
console.log(result);

// Task-3

function brickCalculator(floor) {
  var brick = 1000;
  if (floor < 1) {
    return "Please! input floor amount";
  } else if (floor <= 10) {
    var totalBrick = brick * 15 * floor;
    return totalBrick;
  } else if (floor <= 20) {
    var first10 = 1000 * 15 * 10;
    var elevantTo20 = (floor - 10) * 12 * brick;
    var totalBrick = first10 + elevantTo20;
    return totalBrick;
  } else if (floor > 20) {
    var first20 = brick * 15 * 10 + brick * 12 * (20 - 10);
    var above20 = (floor - 20) * 10 * brick;
    var totalBrick = first20 + above20;
    return totalBrick;
  }
}
var result = brickCalculator(21);
console.log(result);

// Task-4

function tinyFriend(names) {
  var shortestName = names[0];
  for (var i = 0; i < names.length; i++) {
    var friendsName = names[i];
    if (friendsName < [0]) {
      return "Please! enter names";
    } else if (friendsName.length < shortestName.length) {
      shortestName = friendsName;
    }
  }
  return shortestName;
}
var result = tinyFriend(["Mohsin", "Robel", "Apo", "Nahid", "Hassan"]);
var result2 = tinyFriend([""]);
console.log(result);
console.log(result2);

// TASK 5 CHECK PRIME

function isPrime(n) {
  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      return "Its not prime number.";
    }
  }

  return "Its a prime number.";
}
var result = isPrime(128);
console.log(result);

// TASK 6 FACTORIAL number

/**3!=1*2*3
4!=1*2*3*4
5!=1*2*3*4 */
function fac(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
const factr = fac(5);
console.log(factr);

// TASK 7 FIBONACCI

function fibonacci(n) {
  var fibo = [0, 1];

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo;
}
var result = fibonacci(12);
console.log(result);

// TASK 8 LEAP YEAR

//let num;
function isLeapYear(num) {
  return (num % 4 == 0 && num % 100 != 0) || num % 400 == 0;
}
const leapYear = isLeapYear(2000);
console.log(leapYear);

// TASK 9 RANDOM NUMBER

//var result = Math.floor();
//var result = Math.ceil();

var randomNum = Math.random() * 6;
var output = Math.round(randomNum);
console.log(output);

// TASK 10 REVERSE STRING

// function reverseString(str) {
//   var reverse = "";
//   for (var i = 0; (i = str.length); i++) {
//     var char = str[i];
//     reverse = char + reverse;
//   }

//   return reverse;
// }
// var statement = "hello alien vai brother.";
// var forAlien = reverseString(statement);
// console.log(forAlien);
