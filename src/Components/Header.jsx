import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div className="header">
      <h1>THE DAILY PLANET</h1>
      <p>Metropolis, USA</p>
      <p>{currentDate}</p>
    </div>
  );
}

export default Header;
