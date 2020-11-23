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

// let duplicatedArray = [4, 47, 9, 3, 5, 7, 8, 9, 6, 9, 5];
let duplicatedArray = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 7, 8, 9, 9];

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

// FACTORIAL number

/**3!=1*2*3
4!=1*2*3*4
5!=1*2*3*4*5 */
function fac(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
const factr = fac(5);
console.log(factr);
console.log("");

// FIBONACCI

function fibonacci(n) {
  var fibo = [0, 1];

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    // console.log(fibo[i])
  }

  return fibo;
}
var result = fibonacci(12);
console.log(result);
console.log("");

// TASK 9 RANDOM NUMBER

//var result = Math.floor();
//var result = Math.ceil();

var randomNum = Math.random() * 6;
var output = Math.round(randomNum);
console.log(output);
console.log("");
/////////////////

/////
// I can pray namaz wholeheartedly- Afroza Begum, 327 batch
let content = [
  "I can pray namaz wholeheartedly- Afroza Begum- 327 batch",
  "I became Positive- Rahiyan Safin- 352 batch"
];
for (let i = 0; i < content.length; ++i) {
  let listing = content[i];
  let finalRearrange = listing.split("-");
  console.log(
    i +
      1 +
      " " +
      finalRearrange[1] +
      " " +
      finalRearrange[2] +
      " " +
      finalRearrange[0]
  );
}

// let a = content.split("-");
// let add = "01.";
// console.log(add + " " + a[1] + " " + a[0] + " " + a[2]);
console.log("");
/////////////////////////
////

// let anArray = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9, 9];
// let newestArray = anArray.filter(function(v, i, array) {
//   return array.indexOf(v) !== array.lastIndexOf(v);
// });
// console.log(newestArray);
// console.log("");
// /// OR
// const arr = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9, 9];
// const noOfValue = num => {
//   let count = 0;
//   arr.forEach(item => {
//     if (item == num) {
//       count++;
//     }
//   });
//   return count >= 2 ? true : false;
// };
// const last = arr.filter(item => noOfValue(item));
// console.log(last);

// https://medium.com/@entrptaher

const anarr = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9, 9];
function theValue(num) {
  let count = 0;
  anarr.forEach(item => {
    if (item == num) {
      count++;
    }
  });
  return count >= 2 ? true : false;
}
const okay = anarr.filter(item => theValue(item));
console.log(okay);
console.log("");
////////////////////////
//////////////// DUPLICATE VALUES OF AN ARRAY
const array11 = [1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 10];

function findDup(arr) {
  const dup = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && dup.indexOf(arr[j]) === -1) {
        dup.push(arr[j]);
      }
    }
  }

  return dup;
}

console.log(findDup(array11));
console.log("");
////////////////////////////
//////////////// DUPLICATE VALUES OF AN ARRAY OR
function test(arr) {
  var result = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && result.indexOf(arr[i]) == -1) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
console.log(test([1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 10]));
console.log("");

////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLASS PROBLEM
let classOne = ["Rahiyan", "Mizanur", "Habibur", "Kamrul", "Naimur"];
let classTwo = ["Razeeb", "Ishrak", "Ifty", "Ifty2", "Ishmam"];

var i;
function abc(name) {
  for (i = 0; i < classOne.length; i++) {
    if (classOne[i] === name) {
      return classOne[i] + " from classOne";
    }
  }
  for (i = 0; i < classTwo.length; i++) {
    if (classTwo[i] === name) {
      return classTwo[i] + " from ClassTwo";
    }
  }
  return "nothing found";
}
console.log(abc("Mizanur"));
console.log("");
/////////////////////////////////
const usingInclude = ["Rahiyan", "Mizanur", "Habibur", "Kamrul", "Naimur"];
const usingIncludes = ["Razeeb", "Ishrak", "Ifty", "Ifty2", "Ishmam"];
const array3 = usingInclude.concat(usingIncludes);
console.log(array3);

function findingIncludes(name) {
  for (i = 0; i < array3.length; i++) {
    if (array3[i] === name) {
      return name + " is in the group";
    }
  }
  return "nothing";
}

console.log(findingIncludes("Rahiyan"));
console.log("");
/////////////////////////////////

const usingIncludesss = ["Rahiyan", "Mizanur", "Habibur", "Kamrul", "Naimur"];
const usingIncludess = ["Razeeb", "Ishrak", "Ifty", "Ifty2", "Ishmam"];
const array111 = usingIncludesss.concat(usingIncludess);
const js = array111.includes("Ifty");
console.log(js);
console.log("");
///////////////////////////////////

function abc(name) {
  let easy = ["Rahiyan", "Mizanur", "Habibur", "Kamrul", "Naimur"];
  let peasy = ["Razeeb", "Ishrak", "Ifty", "Ifty2", "Ishmam"];
  if (easy.includes(name)) {
    return name + " from classOne";
  } else if (peasy.includes(name)) {
    return name + " from ClassTwo";
  }
  return "nothing found";
}
console.log(abc("Ifty"));
console.log("");

////////////////////////////////////

function abcdefg(name) {
  let countries = [
    {
      city: "Zurich",
      Land: "Switzerland",
      residence: 10041
    },
    {
      city: "Damascus",
      Land: "Syria",
      residence: 100963
    },
    {
      city: "Toronto",
      Land: "Canada",
      residence: 10012
    }
  ];
  for (i = 0; i < countries.length; i++) {
    if (countries[i].city === name) {
      return countries[i];
    }
  }
  return "nothing found";
}
console.log(abcdefg("Toronto"));
console.log("");

////////////

// function abcdefg(name) {
//   let countries = [
//     {
//       city: ["Zurich"],
//       Land: "Switzerland",
//       residence: 10041
//     },
//     {
//       city: ["Damascus"],
//       Land: "Syria",
//       residence: 100963
//     },
//     {
//       city: ["Toronto"],
//       Land: "Canada",
//       residence: 10012
//     }
//   ];
//   for (i = 0; i < countries.length; i++) {
//     if (countries[i].city.includes(name)) {
//       return countries[i].city;
//     }
//   }
//   return "nothing found";
// }
// console.log(abcdefg("Toronto"));
// console.log("");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer"
};
const Intern = {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern"
};

function sayHi() {
  console.log("Hello, my name is", this.name);
}

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi();
Intern.sayHi();
console.log("");

///////////////////////////////////////

let teamOne = ["Rahiyan", "Mizanur", "Habibur", "Kamrul", "Naimur"];
let teamTwo = ["Razeeb", "Ishrak", "Ifty", "Ifty2", "Ishmam"];

let swapKeepfromOne = teamOne.splice(0, 2);
console.log(swapKeepfromOne);
let swapKeepfromTwo = teamTwo.splice(0, 2);
console.log(swapKeepfromTwo);

console.log(typeof swapKeepfromTwo);
console.log(typeof teamOne);

// let gg = teamOne.toString().split(",");
// console.log(gg);
// let hh = teamTwo.toString().split(",");
// console.log(hh);
