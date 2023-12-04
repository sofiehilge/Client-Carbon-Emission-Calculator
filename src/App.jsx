import Navbar from "./Components/Navbar";
import Box from "./Templates/Box";
import "./App.css";
import Background from "./Components/Background";

function App() {
  return (
    <div>
      <Background />
      <Navbar className="px-44" />
      <div className="flex justify-center items-center">
        {/* <h1 className="text-lg text-white absolute">
          Personal Climate Emission Quiz
        </h1> */}
      <div className="flex justify-center p-24">
        <Box />
      </div>
      </div>
        
    </div>
  );
}

export default App;
