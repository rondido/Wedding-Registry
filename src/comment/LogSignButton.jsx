import React from 'react'
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import {Link} from "react-router-dom";


export default function LoginButton() {
  const id="378251890871-rjav6ethapf1cpgmdm7v3jiqq2tociqn.apps.googleusercontent.com"
  return (
    <div>
      <div>
        <input type="text" placeholder='ID' className='IdInput'/>
      </div>
      <div>
        <input type="text" placeholder='Password' className='PassInput'/>
      </div>
        <button className='Loginbutton'>
            로그인
        </button>
        <div className="googleButton">
          <GoogleOAuthProvider clientId={id} >
            <GoogleLogin
              buttonText="google Login"
              onSuccess={(Response)=>{
                console.log(Response);
              }}
              onError={()=>{
                console.log('error')
              }}
              
            />
            
          </GoogleOAuthProvider>
        </div>
        <div>
          <button>
            kakao
          </button>
        </div>
          <Link to="/signup" className='signUpButton'>
              회원가입
          </Link>
    </div>
  )
}
