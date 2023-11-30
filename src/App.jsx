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
    <>
      <Background />
      <Navbar />
      <div className="flex justify-center pt-28">
        <Box /> 
        <Main />
      </div>

      {/* <Hero /> */}

      {/*    <About /> */}
      {/*       <Footer /> */}
    </>
  );
}

export default App;
