import React from "react";
import { Image } from "neptunes-components";
import { SectionTitle, Body, Headline } from "neptunes-components";
export const Section = (props) => {
  const data = props.data;
  const sectionOrder = data.sectionOrder;
  const sectionTitle = data.sectionTitle;
  const sectionBodyClass = data.sectionBodyClass;


  return (
    <div className="section">
      {sectionOrder &&
        sectionOrder.map((element) => (
          <div className="">
            {element.tag === "title" && <SectionTitle data = {element.sectionTitle} />}
            {element.tag === "body" && <>
                <Headline data = {element} />
                <Body data = {element} />
            </>}
            {element.tag === "image" && <Image data = {element} />}
          </div>
        ))}
    </div>
  );
};
