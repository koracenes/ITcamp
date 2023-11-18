
class covek{
    //let ne moze u klasu, nego direktno se pise ime promenljive
    constructor(ime, godine){
        this.ime=ime            //polja(promenljiva) mogu da se direktno deklarisu u kostruktoru
        this.godine=godine      //bez da se predhodno deklarise  van konstruktora

    }
}

let student = new covek("Enes", 30)


class Lista {
    podatak=[]
    length=0
    constructor(){

    }

    push(broj){
        this.podatak[this.length]=broj
        this.length++
    }

    stampaj(){
        console.log(this.podatak);
    }

    pop(){
        let vracanje = this.podatak[this.length-1]
        delete this.podatak[this.length-1]

    }
    
    slice(a,b){    //za domaci

    }
}

let x = new Lista()

x.podatak=[3,4,5,6,7,8,9]
x.push(1)
x.stampaj()
