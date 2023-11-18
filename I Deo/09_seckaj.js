// Funkcija kojoj se prosledjuje lista i broj koja ce da vrati rezultat 
//nove nizove tako da svaki niz sadzi broj elemenata koliki je drugi argument
// fja seckaj([1,2,3,4,5,6],2)>> [1,2], [3,4],[5,6]



// lista.push()
//lista.slice(0,2)

let niz1 = [1,2,3,4,5,6,7]

function seckaj (lista,b){

let novaLista =[]
let index = 0


while (index<lista.length){   //do kraja petlje
    novaLista.push(lista.slice(index,index+b))
    index+=b

}
return novaLista

}

console.log(seckaj(niz1,2));