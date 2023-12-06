import logo from "../assets/Yodos-Logo.svg";
import Button from "./button";

const Navbar = () => {
  return (
    <header className="absolute top-0 flex items-center justify-around w-full p-8">
      <a href="https://withyodo.com/">
        <img src={logo} />
      </a>
      <a href="https://withyodo.com/get-access/">
        <Button
          title="Take Action"
          onClick={() => console.log("button clicked")}
          border="border-2 border-white border-opacity-20"
          backgroundColor="bg-gradient"
        />
      </a>
    </header>
  );
};

export default Navbar;
