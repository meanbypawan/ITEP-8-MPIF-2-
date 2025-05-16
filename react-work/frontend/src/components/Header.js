import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "./Auth";

function Header() {
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        sessionStorage.setItem("isLoggedIn","false");
        sessionStorage.setItem("user",null);
        sessionStorage.clear();
        navigate("/");
    }
    return <>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">D-mart</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><a href="#">Catgories</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    {!isLoggedIn() && <li><Link to="/sign-in">Signin</Link></li>}
                    {!isLoggedIn() && <li><Link to="/sign-up">Signup</Link></li>}
                    {isLoggedIn() && <li><Link to="" onClick={handleSignOut}>Sign out</Link></li>}
                    
                </ul>
            </div>
        </nav>
    </>
}

export default Header;