const Hero = () => {
  const handleDown = () => {
    window.scrollTo(0, 800);
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://image.shutterstock.com/image-vector/co2-carbon-dioxide-emissions-global-260nw-1801491610.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Carbon Footprint
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              A carbon footprint is the total greenhouse gas (GHG) emissions
              caused by an individual, event, organization, service, place or
              product, expressed as carbon dioxide equivalent (CO2e). Greenhouse
              gases, including the carbon-containing gases carbon dioxide and
              methane, can be emitted through the burning of fossil fuels, land
              clearance and the production and consumption of food, manufactured
              goods, materials, wood, roads, buildings, transportation and other
              services.
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xl"
                onClick={handleDown}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
