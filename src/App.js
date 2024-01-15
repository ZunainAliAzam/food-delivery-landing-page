import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
