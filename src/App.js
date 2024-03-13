import { useEffect, useState } from "react";
import "./App.css";
import { Banner } from "./banner";
import { Home } from "./home";
import { Login } from "./login";
import { Navbar } from "./navbar";
import { Register } from "./register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductDetail } from "./productDetail";
import { useLocation } from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true);

 
  setTimeout(()=>{
    setLoading(false)
  },500)
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={loading ? <h1>Loading</h1> : <Home />} />
          <Route path="/login" element={loading ? <h1>Loading</h1> :<Login/>} />
          <Route path="/register" element={loading ? <h1>Loading</h1> :<Register/>} />
          <Route path="/product/:id" element={loading ? <h1>Loading</h1> :<ProductDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
