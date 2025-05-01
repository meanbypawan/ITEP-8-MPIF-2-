import { Component } from "react";

class Header extends Component{
    render(){
        return <>
           <div className="bg-danger text-white p-2 text-center">
            <span style={{fontWeight:"bold"}}>Student App</span>
           </div>
        </>
    }
}

export default Header;