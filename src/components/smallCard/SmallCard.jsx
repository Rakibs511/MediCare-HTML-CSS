import React from 'react'
import smallcardCss from './smallCard.module.css';

const SmallCard = (props) => {
  return <div className={smallcardCss.rootDiv}>
    {props.name}
  </div>;
}

export default SmallCard