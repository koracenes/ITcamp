
// let ucenik ={
//     ime: "enes",
//     prezime: "korac",
//     godine: 0
// }

// console.log(ucenik["ime"])

// ucenik['godine']+=1

// ucenik['ime']=Haris

// ucenik['ocena']=1 //dodeljivanje novog kljuca i vrednosti

// console.log(ucenik)


//Napraviti funkciju kojoj prosledjujemo string, a ona vraca objekat gde su kljucevi slova koja se javljaju, 
//a vrednosti broj njihovih ponavljanja


// 3. Deo : u funkciji dodati jos jedan string kao argument, koji ce u funkciji proveravati da li su anagrami
// anagram je da dve reci imaju istu kolicinu slova 'asd'=='dsa'
let str1 = "aasssddfffff"

function Izbroji(str){
    let object ={}
    

    for(let slovo of str){ 
        (object[slovo])?object[slovo]++ : object[slovo]=1

        // if(object[slovo]){
        //     object[slovo] ++
        // }
        // else{
        //     object[slovo]=1
        // }
    }




    
// drugi deo zadatka: sa novom petljom vratiti karakter koji se najvise ponavlja
    maxValue=0
    maxSlovo =''
    for(let slovo in object){
        if(object[slovo]>maxValue){
            maxValue = object[slovo]
            maxSlovo = slovo
        }
    }





    // console.log("najvise ponavljanja ima "+maxSlovo+":"+maxValue)
    let rezultat ="najvise ponavljanja ima "+maxSlovo+":"+maxValue

    return {object,rezultat}
    
}


console.log(Izbroji(str1))