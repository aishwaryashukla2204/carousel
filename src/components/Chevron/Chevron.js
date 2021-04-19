import React from 'react'
import './Chevron.css'
const Chevron = (props) => {
  return (
    <>
      
        <div
          className={
            props.chevronDirection === "right"
              ? "chevron-right"
              : "chevron-left"
          }
        ></div>
    
    </>
  );
};

export default Chevron;
