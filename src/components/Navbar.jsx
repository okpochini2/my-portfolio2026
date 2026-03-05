import { useState } from "react";
import openIcon from "../assets/photo-1.png";
import closeIcon from "../assets/photo-2.png";

function Navbar () {
  const [open, setOPen] = useState(false);

  return (
    <>
    {/*Fixed Header Bar*/}
    <header className="header">
      <h2 className="logo">OKS DEV</h2>

       <div className="toggle" onClick={() => setOPen(!open)}>
      <img src={open ? closeIcon : openIcon} alt="toggle menu" />
    </div>
    </header>
    
    {/*Slide Down Navigation*/}
    <nav className={open ? "nav open" : "nav"}>
      <a href="#home" onClick={() => setOPen(false)}>Home</a>
      <a href="#projects" onClick={() => setOPen(false)}>Projects</a>
      <a href="#dashboard" onClick={() => setOPen(false)}>Dashboard</a>
      <a href="#contact" onClick={() => setOPen(false)}>Contact</a>
    </nav>
    </>
  );
}

export default Navbar;