import React from 'react';
import './style.scss'
const Navigation = ({items}) => {
  return (
    <div className="navigation bg-primary">
      <div className="container mx-auto px-4">
      <div className="logo">
        <h1 className='text-primary'>The Movies DB</h1>
      </div>
      <div className="navigation-modules">
        {items?.map((item, index) => <button key={index} onClick={item.onClick}>{item.label}</button>)}
      </div>
      </div>
    </div>
  )
}

export default Navigation