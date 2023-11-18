/*
9.31. Саставити рекурзивну функцију која врши сабирање првих n бројева, а затим тестирати
функцију за дато n и исписати добијени резултат. 
*/

function sabiranje(n){
    if(n===0) return true
    console.log(n);
    return (n+sabiranje(n-1))
}

console.log(sabiranje(6));