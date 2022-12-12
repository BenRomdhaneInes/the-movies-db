import React, {useEffect, useState} from 'react'
import Carousel from './carousel'
import Navigation from './navigation/navigation'
function App() {
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])
  const keyApi = '7687ef84b131c80abb9e63f50ee609f0'

  const fetchingMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&language=en-US&page=3`)
    .then(response => response.json())
    .then(response => {
      setMovies(response.results)
    })
  }
  const fetchingGenre = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${keyApi}&language=en-US`)
    .then(response => response.json())
    .then(response => setGenres(response.genres.slice(0, 3)))
  }
  useEffect(() => {
    fetchingMovies()
    fetchingGenre()
  }, [])

  const renderCarouselItems = (id) => {
    return movies.filter(elem => elem.genre_ids.includes(id))
  }

  console.log('test',movies);
  
  return (
    <div className="App">
      <Navigation/>
      {genres?.map((genre, index) => {
        return (
          <div key={index}>
            <h2 className="text-primary">{genre.name}</h2>
            <Carousel items={renderCarouselItems(genre.id)}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
