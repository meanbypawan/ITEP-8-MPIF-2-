import { Link } from "react-router-dom";

function Header() {
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
                    <li><Link to="/sign-in">Signin</Link></li>
                    <li><Link to="/sign-up">Signup</Link></li>
                    
                </ul>
            </div>
        </nav>
    </>
}

export default Header;