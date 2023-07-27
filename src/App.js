import "./App.css";
import Footer from "./Components/Body/Footer";
import Navbar from "./Components/Body/Navbar";
import Sidebar from "./Components/Body/Sidebar";
import Homepage from "./Components/Main/Homepage";

function App() {
  return (
    <div>
      <Sidebar />

      <div id="wrapper">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
