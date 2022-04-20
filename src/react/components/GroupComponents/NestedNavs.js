import React from "react";
import {Navbar} from "../navigationComponents/Navbar";
import {Link} from "../TextComponents/Link"

export const NestedNavs = (props) => {
  const data = props.data
  const nestedNavsContainerClass = data.nestedNavsContainerClass
  const navLink = data.navLink
  const childNavbars = data.childNavbars;

  return (
    <div className={nestedNavsContainerClass || "nestedNavsContainerClass"}>
      {navLink && <Link data = {navLink} />}
      {childNavbars && childNavbars.map((nav) => <Navbar data = {nav} />)}
    </div>
  );
};