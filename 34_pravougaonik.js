
function kvadrat (broj1, broj2){   
    for(let i=0; i<broj1;i++){
        let string =""

        if(i===0 || i === (broj1-1)){
            string+="+"     
            for(let j=1; j<broj2-1;j++){
            string+="-"
            }
            string+="+"

        }else{                          
            string+="|"                 
            for(let j=1; j<broj2-1;j++){
                
                string+=" "               
            }
            string+="|"                 
        }
        console.log(string);

        
    }

}

kvadrat(10,8)
