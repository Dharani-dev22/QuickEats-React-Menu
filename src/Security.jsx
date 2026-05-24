import { useActionState } from "react";
import { useEffect,useState } from "react";

const Security=()=>{

    useEffect(()=>{
        setTimeout(()=>{
            console.log("Security Check: Admin Dashboard Accessed.");
        },3000);
    },[]);

    return(
        <div style={{padding:'20px',border:'1px solid #aaa'}}>
            <h3>Admin Dashboard</h3>
            <p>Welcome to the secure area.</p>
        </div>
    );

};
export default Security;