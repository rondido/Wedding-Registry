import React from 'react';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { KAKAO_AUTH_URL } from './Api/OAuth';
import '../Page/style/global.scss';


export default function LoginButton() {
  const id="378251890871-rjav6ethapf1cpgmdm7v3jiqq2tociqn.apps.googleusercontent.com"
  const handleLoginClick = ()=>{

  }
  return (
    <div>
      <div className='container'>
        <div className='Button'>
          <div>
            <input type="text" placeholder='ID' className='IdInput' name="id"/>
          </div>
          <div>
            <input type="password" placeholder='Password' className='PassInput' name="pwd"/>
          </div>
            <button className='Loginbutton' onClick={handleLoginClick}>
                로그인
            </button>
            <div>
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
            <div className='kakaoDiv'>
              <a href={KAKAO_AUTH_URL} className="kakao">
                카카오 로그인
              </a>
            </div>
            <div>
              <button className='signUpButton'>
                  회원가입
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
