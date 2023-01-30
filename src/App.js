import "./App.css";
import Login from "./Page/Login";

import "./Page/style/global.scss";
import ProductPage from "./Page/ProductPage";
import Header from "../src/comment/Header";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <ProductPage />
    </div>
  );
}

export default App;
