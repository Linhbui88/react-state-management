import React from 'react';

import MovieList from './components/movieList';
import Nav from './components/nav'
import {MovieProvider} from './components/movieContext';
import AddMovie from './addMovie';
import './App.css';

function App() {
  return (
   <MovieProvider>
      <div className='App'>
       < Nav />
       <AddMovie />
       <MovieList />
       
      </div>
    </MovieProvider>
  );
}

export default App;
