/*
    klasa: Soba
    brojSobe, tip, cena, status
    rezervisiSobu(), odjava()

    klas: Hotel
    sobe[]
    dodajSobu(soba), pronadjiDostupneSobe(), rezervisiSobu(brojSobe), odjava(brojSobe)


*/

class Soba{
    constructor(brojSobe, tip, cena){
        this.brojSobe = brojSobe
        this.tip = tip  //apartman, 2krevet, 3krevet
        this.cena = cena
        this.isReserved = false //rezervisana - ne

    }

    rezevisiSobu(){
        return this.isReserved = true
    }

    odjava(){
        return this.isReserved=false
    }

}


class Hotel{
    constructor(){
        this.sobe = []
    }

    dodajSobu(soba){
        this.sobe.push(soba)    
    }

    pronadjiSlobodneSobe(){

        let slobodneSobe = []

        slobodneSobe = this.sobe.filter(empty=>{
            if(empty.isReserved===false){
                console.log(empty.brojSobe);
                return empty.brojSobe

            }
            
        })
        
    }

    rezervisiSobu(brojSobe){
        this.sobe.findIndex(room=>{
            if(room.brojSobe===brojSobe){
                room.isReserved=true
                console.log("soba "+brojSobe+" je rezervisana");
            }
        })
    }

    odjaviSobu(brojSobe){
        this.sobe.findIndex(room=>{
            if(room.brojSobe===brojSobe){
                room.isReserved=false
                console.log("soba "+brojSobe+" je slobodna");
            }
        })
    }
}

soba1 = new Soba(1,"apartman", 123)
soba2 = new Soba(2,"apartman", 123)
soba3 = new Soba(3,"apartman", 123)
soba4 = new Soba(4,"apartman", 123)

soba3.rezevisiSobu()

hotel = new Hotel()

hotel.dodajSobu(soba1)
hotel.dodajSobu(soba2)
hotel.dodajSobu(soba3)
hotel.dodajSobu(soba4)

hotel.pronadjiSlobodneSobe()
hotel.rezervisiSobu(1)
hotel.pronadjiSlobodneSobe()

hotel.odjaviSobu(3)
hotel.pronadjiSlobodneSobe()


