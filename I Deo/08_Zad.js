/*
napraviti niz od dva sortirana niza novi niz koji ce takodje biti sortiran
*/

let A =[3,4,5,6,15,17]
let B =[4,5,7,20,30,33,35,66]

function noviNiz(a,b){
    let C =[]
    
    let pok1= A[0]
    let pok2= B[0]

    let i=0
    let j=0

    while(pok1 || pok2){
        if(A[i]<B[j]){
            C.push(A[i])
            i++
            pok1=A[i]
        }
        else
        {
            C.push(B[j])
            j++
            pok2=B[j]
        }
    }
    return C
}

console.log(noviNiz(A,B))