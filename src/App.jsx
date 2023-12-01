import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Box from "./Templates/Box";
import "./App.css";
import Background from "./Components/Background";

function App() {
  return (
    <div>
      <Background />
      <Navbar className="px-44" />
      <div className="flex justify-center p-24">
        <Box />
      </div>
    </div>
  );
}

export default App;
