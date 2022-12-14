import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import placeholder from '../../images/placeholder.webp'
import { fetchingMovieDetails } from '../../utils/api'
import { AppSetting } from '../../utils/context'

const DetailsPage = () => {
  const [data, setData] = useState({})
  const {itemId} = useParams()
  const {favList, addToFavList, removeFromFavList} = useContext(AppSetting)
  const isFavorite = favList?.includes(itemId)

  const handelFavClick = (e) => {
    e.stopPropagation();
    !isFavorite ? addToFavList(itemId) : removeFromFavList(itemId);
  }

  const fetchingData = async () => {
    const res = await fetchingMovieDetails(itemId)
    setData(res)
  }

  useEffect(() => {
    fetchingData()
  }, [itemId])

  return(
    <div className="md:container md:mx-auto px-4 py-6">
      <div className="flex gap-4 items-stretch flex-wrap">
        <div className="col-3">
        <img className='w-full h-auto rounded-lg object-cover shadow-sm object-left-top' src={data?.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` :  placeholder } alt={data?.title} />
        </div>
        <div className="col-9 shadow-sm bg-white p-3 rounded-lg">
          <h2 className="text-2xl text-light1 font-bold"><span className="text-dark1">Title: </span> {data?.title} <sup className="text-amber-500">{data?.vote_average}</sup></h2>
          <div className='text-light1 text-base mb-2'><span className="font-semibold text-dark2">Release Date: </span>{data?.release_date}</div>
          <p className='text-light1 text-sm'><span className="font-semibold text-dark2">Overview: </span> {data?.overview}</p>
          <button className={`text-white mt-3 py-1 px-2 rounded-lg bg-${isFavorite ? 'accent' : 'primary'}`} onClick={handelFavClick} >{isFavorite ? 'Remove from' : 'Add to'} wishlist</button>
        </div>
      </div>
      <div className="shadow-sm bg-white mt-4 p-3 rounded-lg">
      <p className='text-light1 mb-2'><span className="font-semibold text-dark1">Genres: </span> {data?.genres?.map((item, index) => <span className="chip bg-light2 m-0.5 px-2 py-0.5 rounded-2xl" key={index}>{item.name}</span>)}</p>
      <p className='text-light1'><span className="font-semibold text-dark2">Production Companies: </span> {data?.production_companies?.map((item, index) => <span className="chip bg-light2 m-0.5 px-2 py-0.5 rounded-2xl" key={index}>{item.name}</span>)}</p>
      </div>
    </div>
  )
}
export default DetailsPage;