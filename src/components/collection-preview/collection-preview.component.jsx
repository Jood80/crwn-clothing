import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title"> {title.toUpperCase()}</h1>
    <div className="preview">
      {items ///this will shows us only 4 collections
        //this fn is going to run each render time which is bad for huge data-loading time-
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
