import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="about-top"></div>
      <div className="div about-bottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          non at provident, ab corrupti odio est reprehenderit tempora tempore
          adipisci vitae fugit, sequi exercitationem! Odit dolor sed corrupti
          aut eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Obcaecati quae totam expedita possimus nobis nisi. Amet facilis aut
          enim dolor suscipit harum, distinctio iste, sed unde iure eum odio
          laborum.
        </p>
      </div>
    </motion.div>
  );
}
