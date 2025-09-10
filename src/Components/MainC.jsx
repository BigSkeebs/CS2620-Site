import "./MainC.css";
import upinImg from "../assets/UPIN.jpg";
import supeDayImg from "../assets/SupeDay.jpg";

function MainC() {
  return (
    <div className="mainC">
      <h2>SUPERMAN DOES IT AGAIN</h2>
      <h5>By Lois Lane</h5>
      <img src={upinImg} alt="Superman flying" style={{ height: "400px" }} />
      <p>The Man of Steel has stopped the maniacal Brainiac once again.</p>

      <h2>METROPOLIS, IL HOSTS SUPERMAN DAY 2026</h2>
      <h5>By Clark Kent</h5>
      <img
        src={supeDayImg}
        alt="Superman Day Celebration"
        style={{ height: "200px" }}
      />
      <p>Suit up and celebrate the Man of Tomorrow!</p>
    </div>
  );
}

export default MainC;
