import React, {useEffect, useState} from 'react'
import Carousel from '../carousel'
import { fetchingMovies, fetchingGenre } from '../../utils/api'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])


  const fetchingData = async () => {
    const genreData = await fetchingGenre()
    const moviesData = await fetchingMovies()
    setMovies(moviesData.results)
    setGenres(genreData.genres.slice(0,3))
  }
  
  useEffect(() => {
    fetchingData()
  }, [])

  const renderCarouselItems = (id) => {
    return movies.filter(elem => elem.genre_ids.includes(id))
  }
  return(
    <div className="md:container md:mx-auto px-4 py-2">
      {genres?.map((genre, index) => {
        return (
          <div key={index} className="my-2">
            <h2 className="text-primary font-bold text-2xl mb-1">{genre.name}</h2>
            <Carousel 
              items={renderCarouselItems(genre.id)} 
            />
          </div>
        )
      })}
    </div>
  )
}

export default Home