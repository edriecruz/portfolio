import React, { useState, useRef } from 'react';
import './collaps.scss';

export function Collaps(props) {
    const  [open, setOpen] = useState(false);

    const parentRef = useRef();
    if (parentRef.current)
    console.log(parentRef.current.scrollHeight);

    return (
        <div className='collaps'>
          <button 
          className='toggle' 
          onClick={() => setOpen(!open)}>
            {props.label}
          </button>
          <div className='content-parent' 
          ref={parentRef} 
          style={
            open 
            ? {
            height: parentRef.current.scrollHeight + "px",
            } : {
              height: "0px",
            }
        }>
            <div className='content'>{props.children}</div>
          </div>
        </div>
    );
  }