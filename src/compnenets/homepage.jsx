import React from "react";
import './homePage-style.scss'
const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MEN</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);


export default HomePage;