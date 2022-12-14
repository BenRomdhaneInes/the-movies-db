const keyApi = '7687ef84b131c80abb9e63f50ee609f0'

export const fetchingMovies = async () => {
  let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&language=en-US&page=3`)
  return res.json()
}

export const fetchingGenre = async () => {
  let res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${keyApi}&language=en-US`)
  return res.json()
}

export const fetchingMovieDetails = async (itemId) => {
  let res = await fetch(`https://api.themoviedb.org/3/movie/${itemId}?api_key=${keyApi}&language=en-US`)
  return res.json()
}

