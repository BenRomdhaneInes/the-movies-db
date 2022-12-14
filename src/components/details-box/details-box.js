import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppSetting } from '../../utils/context'
import placeholder from '../../images/placeholder.webp'

import './style.scss'
const DetailsBox = ({item}) => {
  const navigate = useNavigate()
  const {favList, addToFavList, removeFromFavList} = useContext(AppSetting)
  const isFavorite = favList?.includes(item?.id)
  const handelFavClick = (e) => {
    e.stopPropagation();
    !isFavorite ? addToFavList(item.id) : removeFromFavList(item.id);
  }
  return(
    <div className="details-box"
      onClick={()=>{
        navigate(`/details/${item.id}`)
      }}
    >
      <span onClick={handelFavClick} className="material-icons text-white details-box-favBtn">{isFavorite ? 'favorite' : 'favorite_border'}</span>
      <img width="100%" src={item?.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` :  placeholder } alt={item?.title} />
      <div className="details-box-content p-1">
        <h3 className="text-dark1 text-base	font-bold	">{item?.title}</h3>
        <div className="text-dark2 text-sm"><span>Release Date: </span>{item?.release_date}</div>
      </div>
    </div>
  )
}

export default DetailsBox