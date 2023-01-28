import {Link} from "react-router-dom";
import './style/Main.scss';

export default function Main() {
    return (
        <>
            <div className = "headerLogin">
                <Link to="/login">Login</Link>
            </div>
            <div className="itemBox">
                <div className="box"></div>
                <div className="welcome">
                    <p>결혼을 축하드립니다~!!!</p>
                </div>
            </div>
        </>
    )
}