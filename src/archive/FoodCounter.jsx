import { useState } from "react";

const FoodCounter=()=>{

    const[quantity,setQuantity]=useState(1);

    const increaseQuantity=()=>{
        setQuantity(quantity+1);
    };

    const decreaseQunatity=()=>{
        if(quantity >1){
            setQuantity(quantity -1);
        }
    };

    return(
        <div style={{border:'2px solid #fff',padding:'20px',borderRadius:'10px', marginTop:'20px',textAlign:'center' }}>
            <h3>Permium Pepperoni Pizza</h3>
            <p>Price $350</p>

            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',margin:'150px 0'}}>
            <button onClick={decreaseQunatity} style={{fontSize:'20px',padding:'15px 0'}}>-</button>

            <span style={{font:'24px',fontWeight:'bold'}}>{quantity}</span>

            <button onClick={increaseQuantity} style={{fontSize:'20px',padding:'5px 15px'}}>+</button>
            </div>

            <h4>Total basket Value:{quantity *350}</h4>
        </div>
    );
};

export default FoodCounter;