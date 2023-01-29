import React from "react";
import {Link} from "react-router-dom";
import BuyProduct from "../comment/BuyProduct";

export default function BuyPage() {
    return (
        <>
            <div className='Title'>
                <h1> 구매해줄 사람! </h1>
            </div>
            <div className="logout">
                <Link to={"/login"} className="logout">logout</Link>
            </div>
            <div className="container">
                <BuyProduct/>
            </div>
        </>
    )
}