import React from "react";

export const NavigationMenu = (props) => {
  const data = props.data  
  const navigationTabs = data.navigationTabs;

  return (
    <div className="dropdown-menu">
      {navigationTabs && navigationTabs.map((tab) => <a href={tab.tabUrl}>{tab.tabTxt}</a>)}
    </div>
  );
};
