/*
klasa playlista
polja: listaPesama, trenutnaPesma
metode: ubaciPesmu(imePesme), pustiPesmu(imePesme), pustiRandom(), obrisiPesmu(imePesme)
metode: pustiPrethodnu(), pustiSledecu(), upali(), ugasi() 
*/


class PlayLista{
    constructor(nazivPlayListe, listaPesama){
        this.nazivPlayListe = nazivPlayListe
        this.listaPesama = listaPesama
        this.trenutnaPesma = 0

    }

    prikaziListu(){
        console.log(`\nPlay Lista od ${this.nazivPlayListe}:`);
        for(let i=0; i<this.listaPesama.length;i++){
            console.log(`${i+1}. ${this.listaPesama[i]}`);
        }
        console.log(`\n`);
       
    }

    ubaciPesme(imePesme){
        this.listaPesama.push(imePesme)

    }

    pustiPesmu(imePesme){
        
        if(isNaN(imePesme)){
            for(let i=0; i<this.listaPesama.length; i++){
                if(imePesme===this.listaPesama[i]){
                        
                    console.log(`Now playing ${i+1}. ${this.listaPesama[i]}`);
                    console.log(`\n`);
                    this.trenutnaPesma=i
                    break;
                }else{
                    console.log(`Data pesma se ne nalazi na ovoj Play Listi!`);
                    console.log(`\n`);
                    break;
                }
            }
        }else{

            
            if(imePesme<1){
                imePesme=1
            }
            this.trenutnaPesma=imePesme-1
            console.log(`Now playing ${imePesme}. ${this.listaPesama[imePesme-1]}`);
            console.log(`\n`);

        }
    }

    pustiRandom(){

    // Math.flor(Math.random()*this.listaPesama.length) - drugi nacin
       let max=this.listaPesama.length
       let rand=  Math.floor(Math.random() * (max - 0 + 1) ) + 0;
        this.pustiPesmu(rand)
    }

    sledeca(){
        this.pustiPesmu(this.trenutnaPesma+1)
        if
    }


}


let X = new PlayLista("Lista 1", ["pesma1","Pesma2", "Pesma3","Pesma4"])

// X.prikaziListu()
// X.pustiPesmu(0)
X.pustiRandom()