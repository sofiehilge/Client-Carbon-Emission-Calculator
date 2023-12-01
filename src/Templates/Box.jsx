import BoxNavbar from "../Components/BoxNavbar";
import Emoji from "../Components/Emoji";
import Main from "../Components/Main";

const Box = () => {
  return (
    <>
      <span className="rounded-xl px-48 h-[660px] absolute bg-[#f4f4f6]">
        <BoxNavbar />
        <Main />
      </span>
    </>
  );
};

export default Box;
