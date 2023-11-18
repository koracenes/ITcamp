// Primer ya for petlju
let lista = [1,2,3,4,5,6]
let zbir = 0;

for(let i=0;i<6;i++){

    zbir = zbir + lista[i]
    // console.log(`zbir je =  ${zbir}`)
}


for(let broj of lista) //u 'broj' se cuva vrednost clana iz liste; (for of) ide redeom od 0 do kraja
{
    // console.log(broj)
}

// OBJEKTI

let ucenik = {
    ime: "enes",
    prezime: 'korac',
    godine:31

}

// console.log(ucenik['ime'])

//ZADATAK: napraviti petlju koja ce uneti string napisati obrnutim redosledom

let str1 ="muhammed"
let str2 =""

for (let i=str1.length-1; i>=0;i--){
    str2+=str1[i]
}
console.log(str2)


for(let slovo of str1){
    str2 = slovo +str2      //sabira prvo slovo pa na njega dodaje ono predhodno
}