import { useParams } from "react-router-dom";

const DishDetails=()=>{

    const {id}=useParams();

    return(
        <div style={{padding:'20px',border:'2px solid orange'}}>
            <h2>Searching database for Dish#{id}</h2>
        </div>
    );
};

export default DishDetails;