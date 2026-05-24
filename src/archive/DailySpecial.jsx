import { useState, useEffect } from "react";

const DailySpecial=()=>{
    const [special, setSpecial]=useState("Checking today's special...");

    useEffect(()=>{
        setTimeout(()=>{
            setSpecial("Truffle fries are 50% off!");
        },3000);
    },[]);

    return(
        <div style={{padding:'20px',border:'1px solid #ccc'}}>
            <h3>Today's Special</h3>
            <p>{special}</p>
        </div>
    );
};

export default DailySpecial;