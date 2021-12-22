import {useContext} from 'react';
import { MovieContext } from './movieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      <h1>Linh</h1>
      <h1>List of movies: {movies.length}</h1>
     
    </div>
  )
}

export default Nav
