import { useState,useEffect } from "react";

const EmployeeOfMonth=()=>{

    const[EmployeeName,InfoEmployee]=useState("Loading Employee of the Month");


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1').then((response)=>{
            return response.json();
        })
        .then((data)=>{
            InfoEmployee(data.name);
        });
    },[]);

    return(
        <div style={{padding:'20px',border:'20px dashed red'}}>
            <h3>Displaying Employee Of the Month</h3>
            <p>{EmployeeName}</p>

        </div>
    );



};
export default EmployeeOfMonth;
