import React from 'react'
import '../Page/style/Header.scss';
import { useLocation } from 'react-router';

//data가 있을 때 000님 환영합니다
//url login 결혼하는 사람 url  -결혼할 사람-
//url product/login 결혼하는 사람에게 주는 url -구매해줄사람-

export default function Header() {
  const location = useLocation();
  let headerOnOff = true;
  if(location.pathname == '/login'){
    headerOnOff = true;
  }else{
    headerOnOff = false;
  }
  return (
    <div>
        <div className='wedding'>
          Wedding Registry
        </div>        
        <div>
          {
            headerOnOff ? <h1>결혼할 사람</h1> : <h1>구매할 사람</h1>
          }
        </div>      
    </div>
  )
}
