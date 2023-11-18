
// let A = "qwertyuiop"

// for(let i=0;i<A.length;i++){
//     console.log(A[A.length-i])
// }

// napistai funkciju koja ce imati petlju do 100 i ispisati
// FizzBuzz - ako je deljiv sa 3 i 5
// Fizz - aako je deljiv sa 3
// Buzz - ako je deljiv sa 5
// broj - po defaultu

function brojevi(){
    for(let i=1;i<=100;i++){
        if((i%3===0) && (i%5 === 0)){
            console.log("FizzBuzz")
        }
        if(i%3===0){
            console.log("Fizz")
        }
        if(i%5 === 0){
            console.log("Buzz")
        }else{

            console.log(i)
        }
    }
}

brojevi();
