import React from 'react'
import '../Page/style/Header.scss';

//data가 있을 때 000님 환영합니다
//url login 결혼하는 사람 url
//url product/login 결혼하는 사람에게 주는 url

export default function Header() {
  return (
    <div>
        <div className='wedding'>
          Wedding Registry
        </div>        
        <div>
          <h1> 결혼할 사람 </h1>   
        </div>      
    </div>
  )
}
