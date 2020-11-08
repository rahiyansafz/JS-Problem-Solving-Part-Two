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
