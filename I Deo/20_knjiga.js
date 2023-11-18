/*
klasa Knjiga
obeleziKaoProcitanU()
StampajInformacije()

klasa PolicaKnjiga
ubaciKnjiguNaPolicu(knjiga)
ObeleziKaoProcitanu(imeKnjige)
UkloniKnjiguSaPolice(knjiga)
OdstampajInformacijeSvihKnjiga()

*/


class Knjiga{
    constructor(ime, autor,godina){
        this.ime=ime
        this.autor=autor
        this.godina=godina
        procitana = false
    }
}

class PolicaKnjiga{
    constructor(){
        this.book=[]
    }

    ubaciKnjigu(knjiga){
        this.book.push(knjiga)
    }

    procitanaKnjiga(imeKnjige){
        for(let knjg of this.book){
            if(knjg.ime === imeKnjige){
                knjg.procitana=true
            }

        }
    }

}


/*
Brzina koda Big O:
    O(1): instant
    O(n): n iteracija


Hesh Mapa, u JS je u sustini objekat

let x = {ime:"ADO"}

kljuc ->[fja]->adresa (vrednost)

hash funkcija koristi ime kljuca i vraca direktno adresu na kojoj se dobija vrednost




*/