function missingChar(str, n) {
    return str.replace(str.charAt(n), '')
}

missingChar("hello", 2)