const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src="https://img.icons8.com/fluency/48/000000/leaf.png" />
          <span className="ml-3 teaxt-xl">CARBONTIER</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
