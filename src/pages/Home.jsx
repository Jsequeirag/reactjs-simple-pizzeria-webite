import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="header-container">
        <h1>Jose's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </motion.div>
  );
}
