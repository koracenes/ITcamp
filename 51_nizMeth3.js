let niz=[0,1,2,3,4,5,6,7,8,9]

// niz.forEach((clan, i, array)=>{
//     console.log(`redni broj clana je ${i}, a clan je ${clan}`)

//     console.log(array);
// })

//niz.map uzima svaki elemnt niza, uradi mu nesto, i vraca ga
let niz2 = niz.map((clan, i, array)=>{
    return clan*2
})

let niz3 = niz.filter((clan, i, array)=>{
    if(clan%2===0){
        return clan
    }
})

console.log(niz3);

let suma = niz.reduce((a,b, ib, array)=>{
    return a+b
    })
//niz = [0,1,2,3,4,5,6,7,8,9] - reduce
// 1: 0+0 
// 2: 0+1
// 3: 1+2
// 4: 3+3
// 5: 6+4...

//.every - vraca true ako svi clanovi niza zadovoljavaju uslov
let res = niz.every((clan)=>{
    if(clan%2===0){
        return true
    }
})
//.some - vraca true ako postoji neki canov niza koji zadovoljavaja uslov

let res2 = niz.some((clan)=>{
    if(clan%2===0){
        return true
    }
})