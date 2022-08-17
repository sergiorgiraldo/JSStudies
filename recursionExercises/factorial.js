const nb = parseInt(process.argv.slice(2));
function factorial(i){
  if (i != 1){
    return i * factorial(i - 1);
  }
  else{
    return 1;
  }
}
console.log(nb.toString() + "!");
console.log(factorial(nb));