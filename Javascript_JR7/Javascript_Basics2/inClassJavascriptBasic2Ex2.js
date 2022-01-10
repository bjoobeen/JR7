//Ex1
function myFunction() {
    return console.log("Wow, it worked!");
}
myFunction();

//Ex2
function favMovie() {
    return console.log("My favorite movie is Kagemusha.");
}
favMovie();

//Ex3
function oneArg(num) {
    var answer = num * 100;
    return answer;
}

var result = oneArg(10);

console.log(result);

//Ex4
let sentence1 = "the beginning of the sentence and my name is ";
let sentence2 = ' and the sentence ends';

//1st Method
var nameSentence = function(name) {
    return sentence1 + name + sentence2;     
}

console.log(nameSentence("brawndo"));

//2nd Method
function sentenceName(name) {
    var concate = sentence1 + name + sentence2;
    return concate;
}

console.log(sentenceName("lando"));

//Ex5

function threeNumberArg(num1, num2, num3) {
    var biggestNumber = Math.max(num1,num2,num3);
    return biggestNumber;
}    

console.log(threeNumberArg(1,2,5));
//other methods?
