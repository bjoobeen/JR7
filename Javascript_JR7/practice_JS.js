//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//Return the truncated string with a ... ending.
//? EXAMPLE: truncateString(“A-tisket a-tasket A green and yellow basket”, 8) should return the string
//? OUTPUT=> A-tisket...

function truncateString(str, num) {
    if (str.length <= num) {
        return str
    } else {
    return str.slice(0, num) + "..."}
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// divisibleByThree
//
// This function takes a single integer as its argument
// and returns true if the number is evenly divisible by three.
//
// example usage
// divisibleByThree(3) -> true
// divisibleByThree(18) -> true
// divisibleByThree(7) -> false
//? I = Input
//? O = Output
//? C = Constraints
//? E = Edge cases
//? HINT => %

function divByThree(int) {
    if (int % 3 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(divByThree(11));

//EX3

// keyList
//
// This function takes an object and returns a list of its keys,
// not including the default keys of javascript objects.
//
// example usage
// var Thing = {
//  face: ‘big’,
//  height: 6,
//  legs: ‘none’
//  }
//

var Thing = {
      face: 'big',
      height: 6,
      legs: 'none'
      }

function objReturnKey(obj) {
    console.log(Object.keys(obj));
}

objReturnKey(Thing)

//Ex4 - make object

// firstName
// lastName
// age,
// favoriteCoffee,
// codingLanguages => should be an array of languages you already know.

var myself = {
    firstName : "Bijan",
    lastName : "Joobeen",
    age : "36",
    favoriteCoffee : "Boxcar",
    codingLanguages : ["basic", "html", "css"]
}

// Create a addSkill() method that takes in a skill and adds it to your coding languages array.
// I
// O
// C
// E
myself.addSkill = function(str) {
    this.codingLanguages.push(str)
}

myself.addSkill("English");

console.log(myself);