import { useState } from "react";

const InteractiveStatus=()=>{
    const [isOpen,setOpen]=useState(true);

    const toggleStatus=()=>{
        setOpen(!isOpen);
    };

    return(
        <div style={{textAlign:'center',marginTop:'40px'}}>
            <h2>The kitchen is {isOpen ? "Open" :"Closed"}</h2>

            <button onClick={toggleStatus} style={{padding:'10px 20px',fontSize:'60px'}}>
                {isOpen ? "Close kitchen": "Open Kitchen"}
            </button>

        </div>
    );
};

export default InteractiveStatus;