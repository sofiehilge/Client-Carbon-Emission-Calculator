import BoxNavbar from "../Components/BoxNavbar";
import Emoji from "../Components/Emoji";
import Main from "../Components/Main";

const Box = () => {
  return (
    <>
      <span className="rounded-xl px-[176px] h-[628px] absolute bg-[#f4f4f6]">
        <BoxNavbar />
        <Main />
        
      </span>
    </>
  );
};

export default Box;
