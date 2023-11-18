function pisi(n){
    if(n===0)return false   
    console.log(n);
    return pisi(n-1)
}

pisi(8)