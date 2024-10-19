function posNeg(a, b, negative) {
    if (negative) return (a < 0 && b < 0)
    else return (a > 0 && b < 0) || (a < 0 && b > 0)
}

posNeg(1, -1, true)