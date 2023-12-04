import ProgressBar from "./ProgressBar";

const BoxNavbar = () => {
  return (
    <div className="flex justify-between font-Montserrat">
      <p className=" my-3 mx-auto text-gray-700 font-semibold px-4 py-2 rounded text-xs">back</p>
     {/*  <ProgressBar
                bgcolor="bg-gray-700"
                progress="30"
                height={30}
            /> */}
      <p className=" my-3 mx-auto text-gray-700 font-semibold px-4 py-2 rounded text-xs">skip</p>
    </div>
  );
};

export default BoxNavbar;
