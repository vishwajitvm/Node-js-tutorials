function addNumbers (n1 , n2) {
    return n1 + n2 ;
}

function subtractNumbers (n1 , n2) {
    return n1 - n2 ;
}

function divideNumbers (n1 , n2) {
    return n1 / n2 ;
}

function reminderNumbers (n1 , n2) {
    return n1 % n2 ;
}

function multiplyNumbers (n1 , n2) {
    return n1 * n2 ;
}

module.exports = {
    addition            : addNumbers,
    SUBTRACTIONS        : subtractNumbers,
    DIVISIONS           : divideNumbers,
    REMINDERS           : reminderNumbers,
    MULTIPLICATION      : multiplyNumbers,
}