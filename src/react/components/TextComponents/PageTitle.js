import React from "react";
  
export const PageTitle = (props) => {
  
    const data = props.data
    const pageTitle = data.pageTitle
    const pageTitleClass = data.pageTitleClass

  return(
      <h1 className={`${pageTitleClass} || page-title`} >{pageTitle}</h1>
  )
};