function stringX(str){
  if(str.charAt(1).includes("x") || str.charAt(str.length - 1).includes("x")) return "x" + str.replaceAll("x", "") + "x"
  else return str.replaceAll("x", "")
}
