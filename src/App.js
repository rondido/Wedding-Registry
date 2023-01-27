import "./App.css";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Logo from "../src/comment/Logo";
import "./Page/style/global.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Logo />
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
