function frontBack(str) {
    return str.length <= 1 ? str : str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
}

fontBack('hello js')