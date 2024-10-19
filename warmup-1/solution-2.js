function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile) ? true : false
}
monkeyTrouble(true, false)