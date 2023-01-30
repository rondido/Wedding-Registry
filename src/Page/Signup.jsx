import React from "react";
import SignupBox from "../comment/SignupBox";
import './style/global.scss';
import './style/SignupPage.scss';

export default function signup() {
    return (
        <>
            <div className='Title'>
                <h1> 회원가입 </h1>
            </div>
            <div className='container'>
                <SignupBox/>
            </div>
        </>
    )
}