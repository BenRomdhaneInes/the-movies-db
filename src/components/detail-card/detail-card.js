import React, {useEffect, useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import placeholder from '../../images/placeholder.webp'
import { fetchingMovieDetails } from '../../utils/api'
import { AppSetting } from '../../utils/context'

const DetailsCard = ({itemId}) => {
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const {removeFromFavList} = useContext(AppSetting)

  const fetchingData = async () => {
    const res = await fetchingMovieDetails(itemId)
    setData(res)
  }

  useEffect(() => {
    fetchingData()
  }, [itemId])


  return(
    <div className='detail-card flex items-center gap-2 m-1'>
      <img 
      onClick={()=>{
        navigate(`/details/${itemId}`)
      }}
      className='w-10 h-10 rounded object-cover cursor-pointer' 
      src={data.backdrop_path ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}` :  placeholder } 
      alt={data.title} 
      />
      <div className="detail-card-info">
        <div className="text-dark2 font-semibold">{data.title}</div>
        <div className="text-light1"><span className="font-medium">Release Date:</span> {data.release_date}</div>
      </div>
      <div className="text-light1 material-icons ml-auto cursor-pointer" onClick={() => removeFromFavList(itemId)}>delete_forever</div>
    </div>
  )
}
export default DetailsCard;