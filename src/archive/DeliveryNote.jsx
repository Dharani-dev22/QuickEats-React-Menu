import {useState} from 'react';

const DeliveryNote=()=>{
    const [note,setNote]=useState("");

    const handleTyping=(event)=>{
        setNote(event.target.value);
    } ;

    return(
        <div style={{border:'2px solid #555',padding:'20px',borderRadius:'10px',marginTop:'20px'}}>
            <h3>Delivery Instruction</h3>

            <input
            type="text"
            placeholder="e.g.,Leave at the front door.."
            value={note}
            onChange={handleTyping}
            style={{width:'100%',padding:'10px',fontSize:'16px',borderRadius:'5px'}}           
            />
            <div style={{ marginTop: '15px', fontStyle: 'italic', color: '#aaa' }}>
        <strong>Current Note: </strong> 
        {note === "" ? "No instructions provided." : note}
      </div>
      
    </div>

    );
};

export default DeliveryNote;