import React, { useState } from "react";
function ArrayDestructure(){
    const[name , setName] = useState("");
    const[listOfNames, setListOfNames] = useState([]);
     return(
        <div>
            <input type='text' onChange ={(event)=>setName(event.target.value)}/>
            <button onClick={()=>{setListOfNames([...listOfNames, name]);
            setName=('')
            console.log(listOfNames);
            }}>
                Add Names
            </button>
            {listOfNames.map((value,key)=>{ 
                return <h1 key={key}> {value}</h1>;
                })}


        </div>
     )
}

export default ArrayDestructure;