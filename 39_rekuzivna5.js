function sumCifara(n){
  
    if(n===0) return false
    
    
    return (n%10)+Math.trunc(sumCifara(n/10))
}

console.log(sumCifara(123));