import React from "react";
import "./Header.css"

const Header = () => {
    return(
        <div className="d-flex justify-content-between p-4 px-5">
            <div>
                <a className=" a-header" href="">Logo</a>
            </div>  
            <div>
                <a  className="me-5 a-header" href="/home">Home</a>
                <a className=" a-header"  href="/">Create account</a>
            </div> 
        </div>
    )
}

export default Header