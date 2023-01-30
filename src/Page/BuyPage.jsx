import React from "react";
import {Link} from "react-router-dom";
import BuyProduct from "../comment/BuyProduct";
import "./style/BuyPage.scss";
import "./style/BuyProduct.scss";

export default function BuyPage() {
    return (
        <>
            <div className='Title'>
                <h1> 구매해줄 사람! </h1>
            </div>
            <div className="logout">
                <Link to={"/login"} className="logout">logout</Link>
            </div>
            <p>OOOO님의 리스트 입니다.</p>
            <div className="container">
                <BuyProduct/>
                <BuyProduct/>
                <BuyProduct/>
                <BuyProduct/>
            </div>
        </>
    )
}