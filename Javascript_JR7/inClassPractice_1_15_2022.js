//? Write Function that returns the string "Hello World"

function worldFunct() {
    return "Hello World";
}

console.log(worldFunct());

//? Please write a function that takes in 1 string as an argument and returns that string

var string = "ARC1JR is the best!";

var stringFunction = function(string) {
    console.log(string);
}

stringFunction(string);

//? Please write a function that takes in 2 numbers as an argument and return the sum of those numbers
//? Example => addNum(17,3) should return 20

function twoNumber(num1, num2) {
    console.log(num1 + num2);
}

twoNumber(17, 3)

//? Please write a function that takes in a string and returns the length of the given string;
//? Example => stringLength("I like bowling") should return 14

var stringLengthFunction = function(string) {
    console.log(string.length);
}
stringLengthFunction("I like bowling")

//? Please write a function that takes in 2 strings and returns a single string with both strings combined;
//? Example => addStrings("I like bowling", "only on the weekends") should return "I like bowling only on the weekends";

var stringConcate = function(string1, string2) {
    var newString = string1 + string2;
    console.log(newString);
}

stringConcate("I like bowling ", "only on weekends")


