// let niz =[0,2,5,6,78,89,2,43,6,7,3]
// // //redja normalo brojeve, inace ih gleda kao stringove
// // // console.log(niz.sort((a,b)=>a-b));  

// // console.log(Math.max(niz));
// // console.log(Math.max(9,4,7,9,2,2,7,8,2));

// // //niz2 pokazuje na referencu niz, sve sto se desi u niz2 desava se i u niz
// // let ni2 = niz
// // // spreding algoritam: kopira elemente iz niza i niz2, svako ima svoje....
// // let niz2 =[...niz]

// // console.log(Math.max(...niz));

// let objekat = {
//     ime: "Enes",
//     prezime: "Korac",
//     funkcija: function nest(){
//         return 5
//     },
//     mestoStanovanja:{
//         grad:"Novi Pazara",
//         broj:0
//     }
// }

// //kad se radi s objektom

// // let objekat2 ={...objekat}
// let objekat2 ={...objekat, mestoStanovanja:{...objekat.mestoStanovanja}}


// objekat2.ime="Haris"
// objekat2.mestoStanovanja.broj=10

// console.log(objekat);
// console.log(objekat2);


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars.sort((a,b) => a-b));
