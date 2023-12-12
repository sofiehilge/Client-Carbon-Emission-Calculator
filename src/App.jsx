import Navbar from "./Components/Navbar";
import Box from "./Templates/Box";
import "./App.css";
import Background from "./Components/Background";

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar className="px-44" />
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="text-2xl text-white w-max md:text-4xl font-Montserrat">
          Climate Survey with Yodo
        </h1>
      </div>
      <div className="flex items-center justify-center">


        <div className="flex justify-center p-24 mt-20">
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
