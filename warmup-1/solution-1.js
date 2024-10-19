// -------------     solution 1     ---------------------
function sleepIn(weekday, vacation) {
    return (weekday && vacation) || (!weekday && vacation) || (!weekday && !vacation) ? true : false
}

sleepIn(true, true)