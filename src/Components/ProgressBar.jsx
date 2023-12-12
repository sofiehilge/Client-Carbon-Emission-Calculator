import Flex from "autoprefixer/lib/hacks/flex";

const ProgressBar = ({ bgcolor, height, progress }) => {
  const Parentdiv = {
    height: height,
    width: "30vw",
    background:
      "linear-gradient(140deg, #194266 32.02%, #3c5975 83.49%, #516579 96.27%)",
    borderRadius: 40,
    margin: 10,
  };

  const Childdiv = {
    height: "100%",
    background:
      "linear-gradient(140deg, #3183CC 32.02%, #77B2E9 83.49%, #A2CAF2 96.27%)",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    fontFamily: 'Montserrat, sans-serif',
    color: "white",
    fontWeight: 400,
   marginTop: "auto",
   marginBottom: "auto"
  };

  return (
    <div style={Parentdiv}>
      <div style={{ ...Childdiv, width: `${progress}%` }}>
       { <span style={progresstext}>{`${progress}%`}</span>}
      </div>
    </div>
  );
};

export default ProgressBar;

//here is the link to a progressbas:https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/?ref=gcse
