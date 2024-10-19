function front22(str) {
    if (str.length >= 2) str = str.slice(0, 2) + str + str.slice(0, 2)
    else str = str + str + str
    return str
}

front22("coding-js")