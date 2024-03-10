import { useEffect, useState } from "react";
import "./App.css";
import { Banner } from "./banner";
import { Home } from "./home";
import { Login } from "./login";
import { Navbar } from "./navbar";
import { Register } from "./register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductDetail } from "./productDetail";

function App() {
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={loading ? <h1>Loading</h1> : <Home />} />
          <Route path="/login" element={loading ? <h1>Loading</h1> :<Login/>} />
          <Route path="/register" element={loading ? <h1>Loading</h1> :<Register/>} />
          <Route path="/product/detail" element={loading ? <h1>Loading</h1> :<ProductDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
