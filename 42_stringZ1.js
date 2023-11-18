// Zadata1, proveriti koliko ima reci u stringu

// let str1 = "asd asd asd asff dhg ht her gwd "
// console.log(str1.split(" ").length);

//zadatak 2, sastaviti program za odredjivanje broja samoglasnika i suglasnika u ulaznom tekstu

let str2 ="asiud oaishd pooas daisdj "

function samoglasnik(a){
    let samoglasnik = 0
    let suglasnik = 0

    for(let i=0; i<a.length; i++){
        if(a[i]==="a" || a[i]==="e" || a[i]==="i" || a[i]==="o" || a[i]==="u"){
             samoglasnik++
        }else{
            suglasnik ++
        }
    }

    console.log(samoglasnik);
    console.log(suglasnik);
}
let samoglasnici = ["a","e","i","o","u"]
while(true){
    let brSamoglasnici = 0
    let suglasnici = 0
    let rec = prompt("unesi rec")
    if(rec==0)
        break
    for(let i =0; i<rec.length;i++){
        if(samoglasnici.includes(rec[i])){
            brSamoglasnici++
        }else{
            suglasnici++
        }
    }
    console.log(`ima ${brSamoglasnici} samoglasnika, i ${suglasnici} suglasnika`);
}