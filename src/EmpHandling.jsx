import { useEffect, useState } from "react";

const EmpHandling = () => {
const [employeeName,setEmployee]=useState("Loading...");

useEffect(()=>{

    fetch('https://fake-api-url.com/data').then((response)=>{
        return response.json();
    })
    .then((data)=>{
        setEmployee(data.name);
    })
    .catch((error)=>{
        setEmployee("Error :Employee not found");
        console.log("Api failed:",error);
    });

},[]);
return (
        <div style={{ padding: '20px', border: '2px dashed red', marginTop: '20px' }}>
            <h3>Displaying Employee Of the Month</h3>
            <p>{employeeName}</p>
        </div>
    );
};

export default EmpHandling;