import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const { mode, setMode } = props

  const [modeText, setmodeText] = useState("Enable dark mode");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      document.body.style.color = "white";
      setmodeText("Enable light mode");
    } else {
      setMode("light");
      document.body.style.background = "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      document.body.style.color = "black";
      setmodeText("Enable dark mode");
    }
  };
  return (
    <nav mode={mode}>
      <div className="navLink">
        <div className="logo">
          <span>TextUtils</span>
        </div>
        <Link to="/" className="home">Home</Link>
        <Link to="/About">About</Link>
      </div>
      <div className="box">
        {modeText}
        <input type="checkbox" className="mode" onClick={toggle} />
      </div>
    </nav>
  );
}
