class Lista {
    podatak=[];
    length=0
  
    duzinaNiza(){   //metoda koja vraca duzinu niza "(length)"
    let i=0
        while(this.podatak[i]!==undefined){
            i++
        }
        return i
    }

    constructor(a){
        this.podatak = a
        this.length = this.duzinaNiza()

    }
    push(broj){ //dodaje na kraju niza novi element, menja originalni niz, i vraca novu duzinu

        this.length = this.duzinaNiza()
        this.podatak[this.length]=broj
        this.length++
    }


    stampaj(){  
        
        console.log(this.podatak);
        console.log("Duzina niza = "+ this.length);
    }

    pop(){      //brise poslednji element iz niza, menja originalni niz, vraca izbrisani element
       
        let vracanje = this.podatak[this.length-1]
        delete this.podatak[this.length-1]

    }
    
    slice(a,b){    //vraca izabrane elemente kao novi niz, slice(a,b) - pocinje od indexa a do (neukljucujuci) index b, ne menja originalni niz
        

        let newNiz = []
        let j=0
        for(let i=a; i<b;i++){
            newNiz[j]=this.podatak[i]
            j++
        }
        return newNiz
    }

    slice2(a,b){  //vraca izabrane elemente kao novi niz, slice(a,b) - pocinje od indexa a do (neukljucujuci) index b, i menja originalni niz
        // this.length=this.duzinaNiza()


        let newNiz = []
        let rezervniNiz = this.podatak  //rezervni niz koji cuva sve elemente iz orginalnog niza

        let j=0    // brojac za novi niz newNiz
        let k=0     // brojac za originalni niz koji ce promeniti vrednost

        for(let i=a; i<b;i++){  // 1. petlja koja pravi novi niz, i brise vrednosti iz orginalnog niza u zadatom intervalu (a,b), 
            newNiz[j]=this.podatak[i]
            delete this.podatak[i]     // na ovim indexima ce biti prazni slotovi
            j++

        }

       


        for(let i=0; i<a;i++ ){  // 2. petlja koja redefinise orginalni niz, smesta samo elemente od (0,a)
           this.podatak[k]=rezervniNiz[i]
           k++
        }   

        for(let i=b; i<this.length;i++){    // 3. petlja koja redefinise orginalni niz, smesta  elemente od (b,this.length)
            this.podatak[k]=this.podatak[i]
            k++
         }                                  

         for (let i=k; i<this.length;i++){
            delete this.podatak[i]
         }

        //  this.length=k


        return newNiz
    }

slice2(a,b){  //vraca izabrane elemente kao novi niz, slice(a,b) - pocinje od indexa a do (neukljucujuci) index b, i menja originalni niz
        // this.length=this.duzinaNiza()


        let newNiz = []
        let rezervniNiz = this.podatak  //rezervni niz koji cuva sve elemente iz orginalnog niza

        let j=0    // brojac za novi niz newNiz
        let k=0     // brojac za originalni niz koji ce promeniti vrednost

        for(let i=a; i<b;i++){  // 1. petlja koja pravi novi niz, i brise vrednosti iz orginalnog niza u zadatom intervalu (a,b), 
            newNiz[j]=this.podatak[i]
            delete this.podatak[i]     // na ovim indexima ce biti prazni slotovi
            j++

        }

       


        for(let i=0; i<a;i++ ){  // 2. petlja koja redefinise orginalni niz, smesta samo elemente od (0,a)
           this.podatak[k]=rezervniNiz[i]
           k++
        }   

        for(let i=b; i<this.length;i++){    // 3. petlja koja redefinise orginalni niz, smesta  elemente od (b,this.length)
            this.podatak[k]=this.podatak[i]
            k++
         }                                  

         for (let i=k; i<this.length;i++){
            delete this.podatak[i]
         }
         
        //  this.length=k


        return newNiz
    }



}

let x = new Lista([1,2,3,4,5,6,7,8,9])
// x.podatak=[1,2,3,4,5,6,7,8,9]
// x.push(7)
// x.stampaj()

let A = x.slice2(3,5)
console.log(A);

x.stampaj()

