const RestaurantStatus=({isOpen})=>{
    return(
        <div>

        <h2>The kitchen is {isOpen ? "Open" :"Closed"}</h2>
        
        <button className={isOpen ? "btn-order" : "btn-disabled"}>
            {isOpen ? "Order Now" :"View Menu Only"}
        </button>
        </div>
    );
};
export default RestaurantStatus;