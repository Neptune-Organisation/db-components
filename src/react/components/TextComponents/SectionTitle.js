import React from "react"

export const SectionTitle = (props) => {
  
    const data = props.data
    const sectionTitle = data.sectionTitle
    const sectionTitleClass = data.sectionTitleClass

  return(
      <h3 className={`${sectionTitleClass} || section-title`}>{sectionTitle}</h3>
  )
};