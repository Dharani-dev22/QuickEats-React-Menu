import { useState } from "react";

const MenuManager=()=>{
    const [notes,setNotes]=useState("");

    const[dishes,setDish]=useState(["briyani","Pasta"]);

    const handleTyping=(event)=>{
        setNotes(event.target.value);
    };

    const handleAddDish=()=>{
        if(notes !==""){
            setDish([...dishes, notes]);
            setNotes("");
        }
    };

    return(
        <div style={{border:'2px solid',padding:'20px', fontSize:'16px',borderRadius:'10px',marginTop:'10px'}}>

        <h3>Menu</h3>

        <input
            type="text"
            placeholder="Enter Dishes name"
            value={notes}
            onChange={handleTyping}
            style={{border:'10px',fontSize:'16px',width:'100%',borderRadius:'5px'}}
        />
        <button onClick={handleAddDish} style={{padding:'10px 15px',marginLeft:'10px',fontSize:'16px'}}>Save Dish</button>

        <div style={{marginTop:'15px',fontSize:'16px',color:'aaa',fontStyle:'italic',borderRadius:'10px'}}>
            <strong>Displaying Current Dishes Customer ordered: </strong>

            <ul>
            {dishes.map((dish , index)=>(
            <li key={index}>{dish}</li>
            ))}
            </ul>
             {notes ==="" ?" No Dish ordered.":notes}
        </div>

        

    </div>
    );


};
export default MenuManager;