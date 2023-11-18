//Napraviti funkciju koja ce da uzima dva argumenta i proveriti da lisu anagrami
// anagram je da dve reci imaju istu kolicinu slova 'asd'=='dsa'

let s1='asd'
let s2="dass"


function anagram (str1, str2){
    let object1={}
    let object2={}

    for(let slovo of str1){
        object1[slovo] = (object1[slovo])?object1[slovo]++ :object1[slovo]=1

        // if(object1[slovo]){
        //     object1[slovo]++
        // }else{
        //     object1[slovo]=1
        // }
    }

    for(let slovo of str2){
        if(object2[slovo]){
            object2[slovo]++
        }else{
            object2[slovo]=1

        }
    }

    if(str1.length !== str2.length){
            return  false
        }
  
   for(let kljuc in object1){
        if(object1[kljuc]!== object2[kljuc]){
            return false
        }
    }

    return true



// MOJ NACIN

    // let O1 = Object.keys(object1).sort()
    // let O2 = Object.keys(object2).sort()

    // console.log(Object.keys(O1))
    // console.log(Object.keys(O2))

    // if(str1.length !== str2.length){
    //     return  `${str1} i ${str2} imaju razlicit broj slova i nisu anagrami.`
    // }else{
        
    //     for (let i=0; i<O1.length; i++){
    //         if(O1[i] !== O2[i]){
    //             return  `${str1} i ${str2} nisu anagrami.`
    //         }
    //         else{
    //             return  `${str1} i ${str2} su anagrami.`
    //         }
    //     }
    // }



}

console.log(anagram(s1,s2))
