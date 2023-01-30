import {Link} from "react-router-dom";

export default function SignupBox() {
    return (
        <>
            <form class="signupForm">
                <input type="text" placeholder="아이디" name="id" />
                <input type="text" placeholder="이메일" name="email" />
                <input type="password" placeholder="비밀번호" name="password" />
                <button type="submit" className="signupButton">회원가입</button>
                <div className="loginItem">
                    <p>아마 계정이 있습니까?</p>
                    <Link to="/login" className="loginLink">로그인하기</Link>
                </div>
            </form>
        </>
    )
}