import React from "react";
import { menuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/menu.css";
export default function Menu() {
  return (
    <div className="menu">
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
    </div>
  );
}
