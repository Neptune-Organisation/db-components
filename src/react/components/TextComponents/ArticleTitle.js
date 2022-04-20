import React from "react";
  
export const ArticleTitle = (props) => {
  
    const data = props.data
    const articleTitle = data.articleTitle
    const articleTitleClass = data.articleTitleClass

  return(
      <h2 className={`${articleTitleClass} || article-title`}>{articleTitle}</h2>
  )
};