import React from 'react'
import smallcardCss from './smallCard.module.css';

const SmallCard = (props) => {
  return (
    <div className={smallcardCss.rootDiv}>
      <img
        className={smallcardCss.img}
        src={props.img}
        alt="Medicine"
      />
    <div className={smallcardCss.medName}>{props.name}</div>
    </div>
  );
}

export default SmallCard