import Navbar from "./Components/Navbar";
import Box from "./Templates/Box";
import "./App.css";
import Background from "./Components/Background";

function App() {
  return (
    <div>
      <Background />
      <Navbar className="px-44" />
      <div className="flex items-center justify-center">
        {/* <h1 className="absolute text-lg text-white">
          Personal Climate Emission Quiz
        </h1> */}
        <div className="flex justify-center p-28">
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
