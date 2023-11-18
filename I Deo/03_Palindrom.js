//Napraviti funkciju koja proverava da li je tekst palindrom


let str1 = "madam"


function palindrom(str){

    let i=0;
    let j=str.length-1;

    while(i<j){
        if(str[i]!==str[j]){
            return "nije palindrom"
        }
        i++
        j--
    }
    return "je palindrom"

}

console.log(str1+" "+palindrom(str1))