import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
