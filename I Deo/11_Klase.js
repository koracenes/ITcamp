

class Automobil{
    marka 
    godina
    kilometraza
}

let objekat1 ={}

let auto1 = new Automobil()
auto1.marka ="BMW"
auto1.godina = 2021
auto1.kilometraza = 2356667


class Auto{
    constructor( marka, model, kilometraza){
        this.marka = marka      //ako u konstruktoru ima "this" ne mora da se deklarise kao atribut
        this.model = model
        this.kilometraza = kilometraza
    }

}

let auto2 = new Auto("BMW", "R8", '2022')
let auto3 = new Auto("Golf", "8", '2021')