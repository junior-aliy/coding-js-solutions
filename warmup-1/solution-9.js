function notString(str){
    return str.indexOf('not') == 0 ? str : `not ${str}`
  }

notString('none not')