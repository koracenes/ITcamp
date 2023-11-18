/*
    Klasa(10, 'K')  >  polja Celsijus, farenhajt, Kelvin
    (C*9/5)+32  //Iy C u F
    C+273.15  iz C u  K
    (F-32)*9/5 iZ F u C
    K-273.15  Iz K u C
*/


class Stepeni {

    constructor(vrednost, stepen){
        this.vrednost = vrednost 
        this.stepen = stepen// K, F , C
        this.cels = 0
        this.kelvin = 0 
        this.farh = 0

       
            switch(this.stepen){
                case "K":
                    
                    this.cels = this.vrednost-273.15
                    this.farh = 1.8*(this.vrednost-273.15)+32
                    console.log(`${this.vrednost} ${this.stepen} iznosi ${this.cels.toFixed(2)}C i ${this.farh.toFixed(2)} F`);
                    break
                case "F":
                    this.cels = (this.vrednost-32)*9/5
                    this.kelvin = (this.vrednost - 32) * 5 /9 + 273.15
                    console.log(`${this.vrednost} ${this.stepen} iznosi ${this.cels.toFixed(2)}C i ${this.kelvin.toFixed(2)} K`);
                    break
                case "C":
                    this.farh=((this.vrednost) * 9/5) + 32
                    this.kelvin = this.vrednost+273.15
                    console.log(`${this.vrednost} ${this.stepen} iznosi ${this.farh.toFixed(2)}Fi ${this.kelvin.toFixed(2)} K`);
                    break

            }
        

    }



  
}


let X = new Stepeni(150, "K")
let Y = new Stepeni(345, "F")
let Z = new Stepeni(123, "C")