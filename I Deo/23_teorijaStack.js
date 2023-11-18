/*
FIFO:  First iN - First Out 

--> [1]
--> [2,1]
--> [3,2,1]-->

*/


class Red{
    red = []

    duzinaNiza(){
        return this.red.length
    }
    vratiNiz(){
        return this.red
    }

    dodaj(vrednost){
        this.red.unshift(vrednost)
    }

    obrisi(){
        return this.red.pop()
    }

    vidiZadnji(){
        return this.red[this.red.length-1]
    }
    stampaj(){
        console.log(this.red);
    }
}

function kombinuj(obj1, obj2){
    let kombNiz = []
    let n = obj1.duzinaNiza() +obj2.duzinaNiza()

    for(let i =0; i<n;i++){ 
        if(i%2 ===0){
            kombNiz.push(obj1.vratiNiz()[i/2])
        }else{
            kombNiz.push(obj2.vratiNiz()[(i-1)/2])
        }

    }
    return kombNiz
}


class Pletenje{
     red = new Red()

     constructor(red1, red2){
        while(red1.vidiZadnji() || this.red2.vidiZadnji()){
            if(red1.pogledaj()){
                this.red.dodaj(red1.obrisi())
            }
            if(red2.vidiZadnji()){
                this.red.dodaj(red2.obrisi())
            }
        }
     }

}



let mojRed1 = new Red()

mojRed1.dodaj(1)
mojRed1.dodaj(2)
mojRed1.dodaj(3)
mojRed1.dodaj(4)

let mojRed2 = new Red()

mojRed2.dodaj("a")
mojRed2.dodaj("a")
mojRed2.dodaj("a")
mojRed2.dodaj("a")


mojRed1.stampaj()
mojRed2.stampaj()

console.log(kombinuj(mojRed1,mojRed2));


// DOMACI: funkcija (a,b)>>[1,a,2,a,3,b]