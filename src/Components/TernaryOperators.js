import React, { useState } from "react";

function Tenary(){
    const [showHeader , setShowHeader] = useState(false);

    return(
        <div>
            <button onClick={()=>setShowHeader(true)}>Header True</button>
            {showHeader ? <h1>Hello I'm real</h1> : <h1>I'm not real</h1>}
            
        </div>
    )
} 

export default Tenary;