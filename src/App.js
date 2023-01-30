import "./App.css";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import "./Page/style/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Page/Main";
import ProductPage from "./Page/ProductPage";
import BuyPage from "./Page/BuyPage";
import Header from "../src/comment/Header";
import Logo from "./comment/Logo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/productPage' element={<ProductPage />}></Route>
          <Route path='/buyPage' element={<BuyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
