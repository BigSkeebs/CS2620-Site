import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="https://www.dc.com/">Read More</a>
      <a href="https://en.wikipedia.org/wiki/Daily_Planet">About Us</a>
      <a href="https://en.wikipedia.org/wiki/Superman">About Him</a>
      <a
        href="https://en.wikipedia.org/wiki/All-Star_Superman"
        className="right"
      >
        Recommended Reading
      </a>
    </div>
  );
}

export default Navbar;
