import { useParams } from "react-router-dom";

const UserProfile=()=>{

    const {username}=useParams();

    return(
        <div style={{padding:'20px',border:'2px solid #4CAF50',marginTop:'20px'}}>
            <h2>Welcome back,{username}!</h2>
            <p>Here are your past QuickEats Order</p>
        </div>
    );
};

export default UserProfile;