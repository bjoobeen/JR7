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

//? Please write a function to find the Nth character in a string
//? This function will take in a string and a number

//Example Example => findChar("Hello World", 2) should return "L"

function findChar(string, position) {
    return string.charAt(position);
}

console.log(findChar("Hello World", 2))

//? Please write a function to find the last character in a string
//? This function will take in a string

// Example => findLastChar("Hello World") should return "d"

function findLastChar(string) {
    return string.charAt(string.length-1)
}

console.log(findLastChar("Hello World"))

//? Please write a function that takes in an array of passwords,
//? and returns another array of all the passwords which are greater than 10 characters

//Example => findBestPasswords(["password", "eyesDentist2132!", "myPasswordisThebest@", "notGood"])
//should return ["eyeDentist2132!", "myPasswordisThebest@"]
    
// I 
// O
// C
// E

//Input = array of strings
//function findBestPasswords(array) {
     

    //Output an array of strings whose character are > 10


    // Constraints = None


    //Edge Cases = will all elements in the array be strings all the time or should I check
//}

//? Write a function that takes in an array of numbers,
//? and if the number is even replace it with the number 5

//Example => replaceEven([1,3,5,6,7]) should return [1.3.5.5.7]

//I = array containing 1,3,
//O
//C
//E

//YOUR OBJECT In Class Exercise

var yourName = {
    name: "Bijan",
    age: 36,
    alive: true,
    homeTown: "Philadelphia"
};

console.log(yourName.name)
console.log(yourName.alive)



//WHILE LOOP Exercise

var arrayTenItems = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"]

while (arrayTenItems.length > 0 ) {
    console.log(arrayTenItems.pop());
}

console.log("Code is no longer executing");