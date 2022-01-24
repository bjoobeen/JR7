//Truncate a string
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//Return the truncated string a ... ending.

function truncateString(str, num) {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + "..."
}

function truncateString("A-tisket a-tasket A green and yellow basket", 8)