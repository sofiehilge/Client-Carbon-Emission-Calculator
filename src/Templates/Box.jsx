import BoxNavbar from "../Components/BoxNavbar";
import Quiz from "../Components/Quiz";

const Box = () => {
  return (
    <>
      <span className="rounded-xl  w-[70vw] absolute bg-[#f4f4f6]">
        <BoxNavbar />
        <Quiz />
      </span>
    </>
  );
};

export default Box;
