import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink style={{marginRight: "20px"}} to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            {/* <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink> */}
        </div>
    );
};

export default Header;