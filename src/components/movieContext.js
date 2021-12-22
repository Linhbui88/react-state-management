import React, {useState, createContext} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const MovieContext = createContext();

const movieData =[
  {
    name:'Harry Potter',
    price: '$10',
    id:uuidv4()
  },
  {
    name:'Game of Thrones',
    price: '$10',
    id:uuidv4()
  },
  {
    name:'Inception',
    price: '$10',
    id:uuidv4()
  },
]

export const MovieProvider = props => {
  const [movies, setMovies]= useState(movieData)
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}


