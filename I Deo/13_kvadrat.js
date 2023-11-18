// napisati funkciju koja ce na osnovu unetog broja iscrtati kvadrat N x N
// npr. broj = 10



//    (b)       (d)
//    j=0      j=broj-1
//     |        |
//     |        |
//     ↓        ↓       
//     ##########    <-----  (a)  i=0
//     #        #
//     #   (c)  #
//     #    ↓   #
//     #        #
//     #        #
//     #        #
//     #        #
//     #        #
//     ##########    <-----  (a) i=broj-1

function kvadrat (broj){

    
    for(let i=0; i<broj;i++){
        let string =""

        if(i===0 || i === (broj-1)){    //  a) ako je prvi red ili zadnji red, tj. i=0 ili i=9, ispisace # od pocetka do kraja 
            for(let j=0; j<broj;j++){
             string+="#"
            }

        }else{                          // u ostalom slucaju, tj. za i=1 pa do i=8, ispisace
            string+="#"                 //  b)   uvek prvo ispise jedno #, tj. na j=0 pozociji
            for(let j=1; j<broj-1;j++){
                
                string+=" "             //  c)  pa izmedju sve do poslednje kolone je prazno, tj. od j=1 do j=8
            }
            string+="#"                 //  d)  i na kraju jos jedno #, tj na j=9 poziciji
        }
        console.log(string);

        
    }
  
}

kvadrat(15)