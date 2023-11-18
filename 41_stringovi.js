let recenica = "Ana voli Milovana"

// x.slice(0,7) - sece od [0 do 7);  moze i x.slice(-13, -3)
//x.substring(1,6)  - sece isto kao gore, ne radi sa negativnim
console.log(recenica.replace("Ana","Amina"));// nailazi na prvu rec i menja je sa drugom
console.log(recenica.replaceAll("Ana","Amina"));// nailazi na sve reci i menja je sa drugom

console.log(recenica.toUpperCase());
console.log(recenica.toLowerCase());

//CONCAT - spaja dva stringa

let recenica2 = "Ana ide negde"

console.log(recenica2.concat(recenica));

//TRIM, trimEnd, trimStart

let trimRecenica = "   Enes je profi     "

console.log(trimRecenica.trim());// sece prazno sa obe strane
console.log(trimRecenica.trimEnd());

//padStart, padEnd

let primer = "ness"
console.log(primer.padStart(5,"0"));
console.log(primer.padEnd(4,"0"));

//CharAt, CharCodeAt, [] - pristupa odredjenom clanu, sve je isto

recenica3 = "asdfghjkl"


// SPLIT

console.log(recenica.split(""));//pretvara svaki karakter kao poseban clan niza
console.log(recenica.join("")); // uzima sve clanove niza i pretvara ih u string

//indefOf, lastIndexOf

console.log(recenica.indexOf("Ana"));// nailazi na prvi index sa prvim clanom u uslovu (A)
console.log(recenica.lastIndexOf("Ana"));// krece od pozadi, i proverava index prvog clana
console.log(recenica.includes("ana"));// proverava da li se nesto nalazi u stringu, vraca true(1), false(-1)