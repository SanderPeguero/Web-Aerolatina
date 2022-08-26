import React from "react";
// import Video from '../../../videos/Cockpit.mp4'
import "./Item.css";


const Item = ({title, desc, seconddesc, backImg, FirstButton, SecondButton, twoButtons}) => {
  return (
    <div
      className="item"
      // style={{
      //   backgroundImage: `url(${Video})`,
      // }}
    >
      <div className="item-container">
        <div className="item-text">
          <p>{title}</p>
        </div>
          <div className="item-desc">
            <p>{desc}</p>
          </div>
          <div className="item-desc">
            <p>{seconddesc}</p>
          </div>
        <div className="item-third">
            <button className="firstB">{FirstButton}</button>
            {twoButtons && (
              <button className="secondB">{SecondButton}</button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Item;