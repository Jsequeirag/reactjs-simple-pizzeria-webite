import React from "react";
import { menuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/menu.css";
import { motion } from "framer-motion";
export default function Menu() {
  return (
    <motion.div
      className="menu"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1 className="menu-title">OUR MENU</h1>
      <div className="menu-list">
        {menuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              name={menuItem.name}
              image={menuItem.image}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
