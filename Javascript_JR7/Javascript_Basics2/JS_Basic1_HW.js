//Grade Calculator

function myGradeFunction(x) {
    if (x >= 98) {
        return "A+";
    }
    else if (x >= 92) {
        return "A";
    }
    else if (x >= 90) {
        return "A-";
    }
    else if (x >= 88) {
        return "B+";
    }
    else if (x >= 82) {
        return "B";
    }
    else if (x >= 80) {
        return "B-";
    }
    else if (x >= 78) {
        return "C+";
    }
    else if (x >= 72) {
        return "C";
    }
    else if (x >= 70) {
        return "C-";
    }
    else if (x >= 68) {
        return "D+";
    }
    else if (x >= 62) {
        return "D";
    }
    else if (x >= 62) {
        return "D-";
    }
    else (x < 60) 
        return "F";
}

var result = myGradeFunction(95);
console.log(result);