import SkyVideo from "../assets/skyVideo.mp4";
import "../style.css";

const Background = () => {
  return (
    <div className="background">
        <div className="overlay"></div>
      <video src={SkyVideo} autoPlay loop muted />
    </div>
  );
};

export default Background;
