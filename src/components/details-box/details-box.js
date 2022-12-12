import React from 'react';
import placeholder from './placeholder.webp'
const DetailsBox = ({item}) => {
  return(
    <div className="details-box">
      <img width="100%" src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` :  placeholder } alt={item.title} />
      <div className="details-box-content">
        <h3>{item.title}</h3>
        <div>{item.release_date}</div>
      </div>
    </div>
  )
}

export default DetailsBox