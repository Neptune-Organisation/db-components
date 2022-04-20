import React from "react";
import {Section} from "./Section";
import {ArticleTitle} from "../TextComponents/ArticleTitle"

export const Article = (props) => {

  const data = props.data
  const article = data.article
  const articleTitle = article.articleTitle
  const sections = article.sections

  return (
    <div className="article">
      <ArticleTitle data = {data.articleTitle} />
      {sections && sections.map((section) => (
        <Section data = {section} />
      ))}
    </div>
  );
};
