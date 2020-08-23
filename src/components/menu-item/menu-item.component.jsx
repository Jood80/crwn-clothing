import React from "react";
//HOC : take comp and modify it
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  //if there is a size prop it'll add it otherwise it won't affect it
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
//with access to location, match, history props
export default withRouter(MenuItem);
