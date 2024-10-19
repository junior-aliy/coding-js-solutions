function front3(str){
    if(str.length >= 3) str = str.slice(0, 3)
    return str + str + str
}

front3("coding-js")