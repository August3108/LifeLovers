import React, { useState } from "react";
import { highItems } from "./NavItems";
import { Link } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>

      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {highItems.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

    </>
  );
}

export default Dropdown;