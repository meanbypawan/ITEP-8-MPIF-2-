function Header() {
    return <>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">D-mart</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Catgories</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Signin</a></li>
                    <li><a href="#">Signup</a></li>
                    
                </ul>
            </div>
        </nav>
    </>
}

export default Header;