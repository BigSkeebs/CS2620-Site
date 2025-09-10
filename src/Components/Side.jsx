import "./Side.css";
import dpImg from "../assets/DP.jpg";
import clarkImg from "../assets/Clark.jpg";
import loisImg from "../assets/Lois.png";
import jimmyImg from "../assets/Jimmy.png";

function Side() {
  return (
    <div className="side">
      <h2>Our Office</h2>
      <img src={dpImg} alt="Daily Planet Office" style={{ height: "150px" }} />
      <p>Delivering the truth to Metropolis since 1940!</p>
      <h3>Our Staff</h3>
      <p>From top to bottom: Clark Kent, Lois Lane, & James Olson</p>
      <img src={clarkImg} alt="Clark Kent" style={{ height: "150px" }} />
      <img src={loisImg} alt="Lois Lane" style={{ height: "150px" }} />
      <img src={jimmyImg} alt="Jimmy Olsen" style={{ height: "150px" }} />
    </div>
  );
}

export default Side;
