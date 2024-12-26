import React from "react";
import "./Header.css"

const Header = () => {
    return(
        <div className="d-flex p-4 p-md-4 px-md-5 px-3 justify-content-between">
            <div className="col-6 justitfy-content-center align-items-center">
                <a className="w-100 h-100 justitfy-content-center align-items-center d-flex a-header" href=""><img className="col-3 col-sm-1 " src="/public/world-bank-logo-50FE63E4E3-seeklogo.com.png" alt="" /></a>
            </div>  
            <div className="col-6 row justify-content-end">
                <a  className="col-12 col-sm-4 a-header text-md-end text-center" href="/home">Home</a>
                <a className="col-12 col-sm-4 a-header text-md-end text-center"  href="/">Create account</a>
            </div> 
        </div>
    )
}

export default Header