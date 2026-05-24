import { createContext,useContext,useState } from "react";

const UserContext=createContext();

const App=()=>{
    const [activeuser,setActiveUser]=useState("Dharni");
return(

    <UserContext.Provider value={activeuser}>
        <Dashboard/>
    </UserContext.Provider>

 );
};

    const Dashboard=()=>{
        return <Profile/>;
    };
    const Profile=()=>{
        const UserName=useContext(UserContext);

    
    return(
        <div style={{padding:'20px',boarder:'2px solid green'}}>
        <h3>Current User:{userName}</h3>
    </div>
    );
};

export default UserContext;