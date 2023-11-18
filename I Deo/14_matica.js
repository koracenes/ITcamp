// funkcija koja ispisuje
// 123
// 456
// 789

function tarabica (){
    let broj=1

    for(let i=0; i<3;i++){
        let string=""
        for(let j=0; j<3;j++){
            string+=broj
            broj ++
        }

        console.log(string);
    }
}

tarabica()