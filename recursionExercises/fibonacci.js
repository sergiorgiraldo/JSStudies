const max = parseInt(process.argv.slice(2));
function fibonacci(i, j){
    if (i + j > max){
        return;
    }
    else{
        console.log(`${i + j},`);
        fibonacci(j, i + j);
    }
}
if (max == 1){
    console.log("1");
}
else{
    console.log("1,\n1,");
    fibonacci(1,1);
}