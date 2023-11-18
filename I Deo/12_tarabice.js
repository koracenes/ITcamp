// napisati funkciju koja ce na osnovu unetog broja ispisati "#" na sledeci nacin

// broj = 2
// #
// ##

// broj = 3
// #
// ##
// ###

// broj = 4
// #
// ##
// ###
// ####


function tarabica (broj){

    for(let i=0; i<broj;i++){
        let string=""
        for(let j=0; j<broj;j++){
            if(j<=i){
                string+="#"
            }else{
                string+=" "
            }
        }

        console.log(string);
    }
}

tarabica(7)

