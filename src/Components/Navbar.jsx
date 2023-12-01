import logo from "../assets/Yodos-Logo.svg";
import Button from "./button";

const Navbar = () => {
  return (
    <header className="absolute top-0 py-[1.125rem] px-[176px] flex justify-between w-full">
      <img src={logo} />
      <Button
        title="Take action"
        onClick={() => console.log("button clicked")}
        backgroundColor="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-800"
        border="border border-solid border-white border-opacity-20"
      />
    </header>
  );
};

export default Navbar;
