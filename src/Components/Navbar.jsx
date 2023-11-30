import logo from "../assets/Yodos-Logo.svg";
import Button from "./button";

const Navbar = () => {
  return (
    <header className="absolute top-0 py-[1.125rem] px-[18px] flex justify-between w-full">
      <img src={logo} />
      <Button title="Take action" />
    </header>
  );
};

export default Navbar;
