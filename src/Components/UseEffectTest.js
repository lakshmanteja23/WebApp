import React, { useEffect } from "react";
import { useState } from "react";
import App from "../App";


function UseEffectTest(){

    const[number , setNumber] = useState(0);
    useEffect(() =>{
    
      console.log("page rendered", [number])  
    })
    return(
        
        <div style={{fontSize : 40}}>
            {number}
            <button onClick={()=> {setNumber(number + 1);}}>{" "} Increase</button> 
        </div>
    )
}

export default UseEffectTest;