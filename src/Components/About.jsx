const About = () => {
  return (
    <div className="w-4/5 my-6 mx-auto mb-12 mt-24">
      <p className="text-4xl text-center font-bold">About the page</p>
      <p className="text-lg font-semibold text-gray-500 p-4">
        This is a carbon footprint calculator which calculates the the personal
        carbon footprint on the basis of the habits and enery consummptions.
        Based on your selections you are given points for each question and
        total is made . If your score is less than 60 , then you are causing
        less carbon emission.And If your score is greater than 60 , then you
        need to find ways to reduce carbon emission.
      </p>
    </div>
  );
};

export default About;
