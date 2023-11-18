// Obnavaljanje JS

let tekst = "asfas"


let brojevi = 123
console.log(brojevi)

// NIZOVI
let array = [2,4,6,7,8,9,0,4,3,46,8,9]

console.log(array[0])

//OBJECTI
let object ={
    ime:"Enes",
    prezime:"korac",
    godine: 30,
    prom: null,
    ozenjen: false
}


// = dodela vredosti
// === provera jednakosti

if(object.ozenjen){
    console.log("true")
}
// object[ime] // "ime" je index


//FUNKCIJE

let br1 = 2
let br2 = 3
let br3 = 5

function sabiranje(a,s,d){

    let rezultat
    rezultat = a+s+d

    return rezultat
}

sabiranje(br1,br2,br3)


console.log(sabiranje(br1,br2,br3))


