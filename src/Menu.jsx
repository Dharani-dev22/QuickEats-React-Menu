import {Link } from 'react-router-dom';

const Menu=()=>{

    const dishes=[
        {id:1,name:"Permium Pepperoni Pizza"},
        {id:2,name:"Truffle fires"},
        {id:3,name:"Secert Menu Burger"},

    ];
    return(
        <div style={{padding:'20px'}}>
            <h2>Quickeats Menu</h2>
            <ul style={{listStyle:'none',padding:'0'}}>

                {dishes.map((dish)=>(
                  <li key={dish.id} style={{margin:'10px 0'}}>

                    <Link
                        to={`/dish/${dish.id}`}
                        style={{textDecoration:'none',color:'646cff',fontWeight:'bold'}}>
                        View{dish.name}
                    </Link>
                  </li>    
                ))}
            </ul>

        </div>
    );
};

export default Menu;