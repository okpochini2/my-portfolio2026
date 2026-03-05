import { section } from "framer-motion/client";
import profile from "../assets/photo-3.png";

function Hero () {
  return (
    <section id="home" className="hero">
      <img src={profile} alt="OKS DEV" className="profile" />
      <h1>OKS DEV</h1>
      <p>Frontend Web Developer</p>
      <p>REACT | JAVASCRIPT | HTML | CSS</p>
      <p>Tech Blog YouTuber showcasing Modern Web Development Skills</p>
    </section>
  );
}

export default Hero;