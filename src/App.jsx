import { createContext, useContext, useState } from "react";

 
const UserContext = createContext();
const CartContext = createContext();

const Navbar = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
            <h2>Items in Cart: {cartCount}</h2>
        </div>
    );
};

const Menu = () => {
    const { setCartCount } = useContext(CartContext);
    
    
    const handleAddPizza = () => {
        setCartCount((previousCount) => previousCount + 1);
    };
 
    return (
        <div style={{ padding: '20px', border: '2px solid orange', marginTop: '20px' }}>
            <h3>Premium Pepperoni Pizza</h3>
            <button onClick={handleAddPizza} style={{ padding: '10px', fontSize: '16px' }}>
                Add to Cart
            </button>
        </div>
    );
};

const Dashboard = () => {
    return <Profile />;
};

const Profile = () => {
    const userName = useContext(UserContext);
    
    return (
        <div style={{ padding: '20px', border: '2px solid green', marginTop: '20px' }}>
            <h3>Current User: {userName}</h3>
        </div>
    );
};  

const App = () => {
    const [activeUser, setActiveUser] = useState("Dharani");
    const [cartCount, setCartCount] = useState(0);

    // Combined everything into ONE single, cleanly nested return statement
    return (
        <UserContext.Provider value={activeUser}>
            <CartContext.Provider value={{ cartCount, setCartCount }}>
                
                <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
                    <h1>QuickEats App</h1>
                    
                    <Navbar />
                    <Dashboard />
                    <Menu />
                    
                </div>

            </CartContext.Provider>
        </UserContext.Provider>
    );
};

export default App;