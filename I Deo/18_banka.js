/*
    Napraviti bankovni racun
    metode:
        - stampa trenutno stanje
        - depozit(broj): uvecava vrednost za prosledjeni broj, vraca trenutno stanje nakon izvrsenja
        - podigniNovac(broj) -> vraca trenutno stanje nakog izvrsenja
*/
class bankovniRacun{
    constructor(ime, stanje){

        this.ime = ime
        this.stanje = stanje
        this.istorijaTransakcija = []

    }

    trenutnoStanje(){
        console.log(`stanje racuna na ime ${this.ime} je: ${this.stanje} RSD.`);
    }

    depozit(broj){
        if(broj<=0){
           console.log(`Nije moguce izvrsiti transakciju`);
           return
        }
        this.stanje+=broj

       console.log(`novo stanje racuna je ${this.stanje} rsd`);
        this.istorijaTransakcija.push(`${this.ime} prilozio ${this.stanje} na racunu`)
    }

    podigniNovac(broj){
        if(broj>this.stanje){
            console.log(`Nije moguce izvrsiti transakciju`);
            return
        }
            this.stanje-=broj
           console.log(`novo stanje racuna je ${this.stanje} rsd`);
           this.istorijaTransakcija.push( `${this.ime} podigao ${this.stanje} sa racuna`)
        

    }

}


let enes = new bankovniRacun("Enes", 1000000)

enes.trenutnoStanje()
enes.depozit(5000)

enes.trenutnoStanje()
enes.podigniNovac(4574)

