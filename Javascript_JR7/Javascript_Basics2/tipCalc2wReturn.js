// I.O.C.E

//I = Input
//O = Output
//C = Constraints
//E = Edge Case

function tipFunction(total, tip) {
    var percentage = (tip/total) * 100;
    console.log("Tip percentage is " + percentage + "%");

    if (percentage <= 5 && percentage > 0) {
        return "You are an awful tipper";
    } else if (percentage > 5 && percentage <= 10) {
        console.log( "You are an Ok tipper!");
    } else if (percentage > 10 && percentage <= 20) {
        return "You are a good tipper!";
    } else if (percentage > 20) {
        return "You are a great tipper!";
    } else {
        return "Invalid Entry";
    }
}           

console.log(tipFunction(100, 25));