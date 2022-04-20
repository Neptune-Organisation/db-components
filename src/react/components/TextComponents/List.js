import React from "react";
export const List = (props) => {
  const data = props.data
  const listClass = data.listClass
  const listContainerClass = data.listContainerClass
  const listTitle = data.listTitle
  const listTitleClass = data.listTitleClass
  const listEntries = data.listEntries;
  const listEntryClass = data.listEntryClass

  return (
    <div className={`${listContainerClass} || list`}>
      <h2 className={listTitleClass}>{listTitle}</h2>
      <ul className={listClass}>{listEntries && listEntries.map((listEntry) => <li className={listEntryClass}>{listEntry}</li>)}</ul>
    </div>
  );
};
