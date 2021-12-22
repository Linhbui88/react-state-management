import React, {useState, useContext} from 'react'
import { MovieContext } from './components/movieContext'


const AddMovie = () => {
  const [name, setName]= useState('')
  const [price, setPrice]= useState('$')
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = (e) =>{
    setName(e.target.value)
  }
  const updatePrice =(e) =>{
    setPrice(e.target.value)
  }

  const addMovie = (e) =>{
    e.preventDefault();
    setMovies(preMovies =>[...preMovies,{name, price}])
  }
  return (
    <form onSubmit={addMovie}>
      <input type="text" name ="movie" placeholder="movie" value={name} onChange={updateName}></input>
      <input type="text" name ="price" placeholder="price" value ={price} onChange={updatePrice}></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddMovie
