import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Body
import Footer from "./Components/Body/Footer";
import Navbar from "./Components/Body/Navbar";
import Sidebar from "./Components/Body/Sidebar";

import Homepage from "./Components/Main/Homepage";
import ShopNow from "./Components/Main/ShopNow";
import ProductDescription from "./Components/Main/ProductDescription";
import Cart from "./Components/Main/Cart";
import ItemForm from "./Components/Forms/ItemForm";
import Login from "./Components/Auth/Login";

function App() {
  return (
    <div>
      <Sidebar />

      <div id="wrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Login" element={<Login />} />


            <Route path="/" element={<Homepage />} />
            <Route path="/Shop-now" element={<ShopNow />} />
            <Route path="/Product-description" element={<ProductDescription />} />
            <Route path="/Cart" element={< Cart />} />
            <Route path="/Checkout" element={< ItemForm />} />


          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
