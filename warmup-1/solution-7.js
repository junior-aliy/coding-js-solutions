function nearHundred(n) {
    if (n < 150) return (Math.abs(n - 100) <= 10) ? true : false
    else return (Math.abs(n - 200) <= 10) ? true : false
}

nearHundred(85)