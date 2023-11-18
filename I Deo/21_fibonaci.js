/*
napravi funkciju koja pravi fibonacijev niz do unetog broja

0  1  2  3  4  5  6 
0, 1, 1, 3, 5, 8, 13
*/


function fibonacijevBroj(broj){
    let fibonaci =[0, 1]
    let sledeci = 0

    for(let i =2; i<broj; i++){
        sledeci=fibonaci[i-2]+fibonaci[i-1]

        fibonaci.push(sledeci)
    }
    console.log(fibonaci);
}

fibonacijevBroj(20);


