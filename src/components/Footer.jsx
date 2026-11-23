import { NavLink } from "react-router-dom";

export default function Footer(props) {
    

    return (
       <>
       <div>
        <div>
            <h1>Quick Links</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop</NavLink>
            <NavLink to="/beauty">Beauty</NavLink>
            <NavLink to="/fragnances">Fragnances</NavLink>
            <NavLink to="/groceries">Groceries</NavLink>
            <NavLink to="/furniture">Furniture</NavLink>
            
        </div>
        <div>
            <h1>Customer Supprot</h1>
            <NavLink to="/"></NavLink>
        </div>
       </div>
       </> 
    );
}
