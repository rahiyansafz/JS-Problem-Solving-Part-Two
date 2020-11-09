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
