import logo from "../assets/Yodos-Logo.svg";
import Button from "./button";

const Navbar = () => {
  return (
    <header className="absolute top-0 flex justify-between w-full px-20 py-5">
      <img src={logo} />
      <Button
        title="Get early access"
        onClick={() => console.log("button clicked")}
        border="border-2 border-white border-opacity-20"
        backgroundColor="bg-gradient"
      />
    </header>
  );
};

export default Navbar;
