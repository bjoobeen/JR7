//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//Return the truncated string with a ... ending.
//? EXAMPLE: truncateString(“A-tisket a-tasket A green and yellow basket”, 8) should return the string
//? OUTPUT=> A-tisket...

function truncateString(str, num) {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + "..."
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


