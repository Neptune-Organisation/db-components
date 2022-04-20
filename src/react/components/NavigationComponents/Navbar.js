import React from "react";
import {Link} from "../textComponents/Link";

export const Navbar = (props) => {
  const data = props.data
  const navbarClass = data.navbarClass
  const navbars = data.navbars

  return (
    <nav className={`${navbarClass} || navbar__horizontal`}>
      {navbars &&
        navbars.map((navbar) => (
            <Link data = {navbar} />
        ))}
    </nav>
  );
};
