/*
POTROSACKA KORPA

klase: Artikl i Korpa

Artikl: naziv, cena, kolicina

Korpa: lista, 
    dodaj(artikal), ukloni(artikal), naplati()
*/


class Artikal{
    constructor(naziv, cena, kolicina){
        this.naziv = naziv
        this.cena = cena
        this.kolicina = kolicina
    }
}

class Korpa{
    // lista.indexOf("nestooo") -> vraca index prvog elementa koji ima vrednost 
    lista = []
    
    
    constructor(){
        
        // this.lista.indexOf("asdasd")
    }
    ukloni(artikal){
        let ind = this.lista.indexOf(artikal)
        this.lista.splice(ind,1)
        // console.log(this.lista);
    }

    dodaj(artikal){
        if(this.lista.includes(artikal)){
            let i=   this.lista.indexOf(artikal)
            this.lista[i].kolicina +=artikal.kolicina
        }else{
            
            this.lista.push(artikal)
        }
    }

  

    naplati(){
        let ukupno = 0

        console.log("============NOVI RACUN=========");

        for(let i=0; i<this.lista.length;i++){
            console.log(this.lista[i]);
        }
        for(let i=0; i<this.lista.length;i++){
            ukupno+=(this.lista[i].kolicina*this.lista[i].cena)

        }
        console.log("===========================");
        console.log("Ukupno: "+ukupno+" RSD");
    }


    

    
}

banana = new Artikal("Banana", 120, 5)
jabuka = new Artikal("jabuka", 80, 3)
kruska = new Artikal("Kruska", 90, 2)
kivi = new Artikal("kivi", 130, 4)

cart = new Korpa()
cart.dodaj(banana)
cart.dodaj(jabuka)
cart.dodaj(kruska)
cart.dodaj(kivi)
cart.naplati()

cart.ukloni("jabuka")
cart.naplati()



/* 
    ukupno sa ugradjenim metodama:
    
*/

let A=["dado", "enes", "ahmed"]

console.log(A.indexOf("enes"));// argument moze da bude samo ime/provemnljive

console.log(A.findIndex(element=>element==="enes"));// za razliku od indexOf(), moze da prima za argument neku logiku, funkciju...

//element=>element==="ënes" call back funkcija

