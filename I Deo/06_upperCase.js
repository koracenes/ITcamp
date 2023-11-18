//napraviti funkciju koja prima string recenicu, koja vraca istu recenicu tako da je prvo slovo svake reci veliko slovo

let str1 = "ucimo programiranje danas"

function upperCase(str1){

    let str2=str1[0].toUpperCase()

    for(let i=1; i<str1.length; i++){
        if(str1[i-1]===' '){
            str2 = str2+str1[i].toUpperCase()
        }else{
            str2 = str2+str1[i]
        }
    }
    return str2
}

console.log(upperCase(str1))