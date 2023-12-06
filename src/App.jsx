import Navbar from "./Components/Navbar";
import Box from "./Templates/Box";
import "./App.css";
import Background from "./Components/Background";

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar className="px-44" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className=" text-white font-Montserrat text-4xl">
          Climate Survey with Yodo
        </h1>
      </div>
      <div className="flex items-center justify-center">
        {/* <h1 className="absolute text-lg text-white">
          Personal Climate Emission Quiz
        </h1> */}

        <div className="flex justify-center p-24 mt-20">

          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
