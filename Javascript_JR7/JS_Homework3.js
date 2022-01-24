//Exercise 1
//Create a function that adds up the integers in the following array.

var numbers = [10, 20, 30, 40, 50];

function addNumbers(numberArray) {
    var result = 0;
    for(var i = 0; i < numbers.length; i++) {
        result = result + numberArray(i);
    }
    return result;
}

console.log(result);

