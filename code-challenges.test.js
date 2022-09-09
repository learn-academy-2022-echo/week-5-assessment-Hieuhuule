// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")

// const { describe } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe('codedMessage', () => {
    it('takes a string, converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0', () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
    })
})

// ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function that takes a string as an argument
// convert string to array
// iterate through array 
// use a conditional to mutate the string characters in the array
    // convert string characters 'a' to integer 4, 'e' to 3, 'i' to 1, and 'o' to 0
// push new values to empty array
// return convert array of str characters into a string with join

const codedMessage = (str) => {
    let code = []
    let str_arr = str.split('')
    str_arr.map((element) => {
        if (element == 'a') {
            code.push(element.replace('a', 4))
        } else if (element == 'A') {
            code.push(element.replace('A', 4))
        } else if (element == 'e') {
            code.push(element.replace('e', 3))
        } else if (element == 'E') {
            code.push(element.replace('E', 3))
        } else if (element == 'i') {
            code.push(element.replace('i', 1))
        } else if (element == 'I') {
            code.push(element.replace('I', 1))
        } else if (element == 'o') {
            code.push(element.replace('o', 0))
        } else if (element == 'O') {
            code.push(element.replace('O', 0))
        } else {
            code.push(element)
        }
    })
    return code.join('')
}

// I was thinking that I could refactor this using the OR conditional, but that would require getting rid of the REPLACE method.

// codedMessage(secretCodeWord1)
// codedMessage(secretCodeWord2)
// codedMessage(secretCodeWord3)

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe('includesLetter', () => {
    it('takes in an array of words and a single letter and returns an array of all the words containing that particular letter', () => {
        expect(includesLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]);
        expect(includesLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// ReferenceError: includesLetter is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function that takes an array and a letter
// iterate through the array
// if element in the array includes letter
// push to new array
// return new array

const includesLetter = (arr, str) => {
    let includesArr = []
    arr.map((element) => {
        if (element.toLowerCase().includes(str)) {
            includesArr.push(element)
        }
    
    })
    return includesArr
}

// includesLetter(fruitArray, letterA);
// includesLetter(fruitArray, letterE);


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe('fullHouse', () => {
    it('takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind', () => {
        expect(fullHouse(hand1)).toEqual(true);
        expect(fullHouse(hand2)).toEqual(false);
        expect(fullHouse(hand3)).toEqual(false);
        expect(fullHouse(hand4)).toEqual(true);
    })
})

// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function that takes an array of numbers
// create 5 empty arrays to hold possible 5 numbers
// iterate through the array
// if the number doesn't exist in an empty array, add it to that empty array
// if the number in the array is the same as the iterated number, add it to the array
// if the number doesn't exist in the array, but other numbers do, add it to an empty array
// if one of the arrays has a length of 3 and another has an array of 2, return true

const fullHouse = (arr) => {
    
   // these are containers that stores each number possible
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let arr5 = [];

    // this for loop iterates through the hand and sorts them into containers
    for (i = 0; i < arr.length; i++) {
        if (arr1.includes(arr[i]) === false && arr1.length === 0) {
            arr1.push(arr[i])
        } else if (arr1.includes(arr[i]) == true) {
            arr1.push(arr[i])
        } else if (arr1.includes(arr[i]) == false && arr1 != [] && arr2.includes(arr[i] == false && arr2.length === 0)) {
            arr2.push(arr[i])
        } else if (arr2.includes(arr[i]) == true) {
            arr2.push(arr[i]);
        } else if (arr2.includes(arr[i]) == false && arr2 != [] && arr3.includes(arr[i]) == false && arr3.length === 0) {
            arr3.push(arr[i])
        } else if (arr3.includes(arr[i]) == true) {
            arr3.push(arr[i])
        } else if (arr3.includes(arr[i]) == false && arr3 != [] && arr4.includes(arr[i]) == false && arr4.length === 0) {
            arr4.push(arr[i])
        } else if (arr4.includes(arr[i]) == true) {
            arr4.push(arr[i])
        } else if (arr4.includes(arr[i]) == false && arr4 != [] && arr5.includes(arr[i]) == false && arr5 === 0) {
            arr5.push(arr[i])
        } else if (arr5.includes(arr[i]) == true) {
            arr5.push(arr[i])
        } else {
        }
    }
    // Uncommenting these console.logs will show you whats in each hand at the end of the iteration
    // console.log('arr1', arr1)
    // console.log('arr2', arr2)
    // console.log('arr3', arr3)
    // console.log('arr4', arr4)
    // console.log('arr5', arr5)

    // this conditional determines if full house is true or false
    if (arr1.length < 3 && arr2.length < 3 && arr3.length < 3 && arr4.length < 3 && arr5 < 5 ) {
        return false
    } else if (arr1.length === 3 || arr2.length === 3 || arr3.length === 3 || arr4.length === 3 || arr5.length === 3 &&
        arr1.length === 2 || arr2.length === 2 || arr3.length === 2 || arr4.length === 2 || arr5.length === 2) {
        return true
    } else {
        return false
    }
}

// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))
// console.log(fullHouse(hand4))





// HERE IS SOME REFACTORED CODE
// const isFullHouse = (hand) => {
//     const obj = {}
//     hand.forEach((card) => {
//       // first iteration goes through and sets the property to the number
//       // sets the value to 1
//       // If we have a hand [5, 5, 5, 2, 2]
//       // the first property = 5 but the value = 1
//       // So obj = { 5: 1 }
//       obj[card] = obj[card] + 1 || 1
//     })
//     const result = Object.values(obj)
//     return result.includes(2)
//       && result.length === 2;
//   }