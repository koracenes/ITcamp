// 9.29 


function faktorijel(n){
    console.log(n);
    if(n===1) return 1
    return n*faktorijel(n-1)
}

faktorijel(10)