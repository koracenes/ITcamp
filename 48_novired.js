let rec = "asd asdasd  asdasd  adsasd  asddas"

function noviRed(rec){
    let str=""
    for(let i =0; i<rec.length;i++){
            if(rec[i]===" "){
                str+="\n"
                i++
            }
            str+=rec[i]
    }
    console.log(str);
}


function split(a){
    for(let word of a.split(" ")){
        console.log(word);
    }

}
noviRed(rec)
// split(rec)