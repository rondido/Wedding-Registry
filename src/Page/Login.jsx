import React from 'react';
import LogSignButton from '../comment/LogSignButton';
import './style/LoginPage.scss';
import './style/global.scss';
import Logo from '../comment/Logo';

export default function Login() {
  return (
    <>      
      <div>
        <Logo/>
        <div className='Title'>
          <h1> 결혼할 사람 </h1>   
        </div>      
            <LogSignButton/>
      </div>
    </>
  )
}
