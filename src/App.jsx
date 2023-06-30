import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Movie from './components/Movie/Movie'
import movies from '../movie.json'
const App = () => {
  return (
    <div className='appContainer'>
      <Header />
      <div className="movies">
  
        
        {
          movies.map((ele)=>{
        return(<Movie 
          name={ele.Title+" "+ele.Year} 
          src={ele.Poster} 
          lnk="https://www.justwatch.com/us/movie/annihilation" 
          desc="A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply." 
        />)
          })
        }
      </div>
    </div>
  )
}

export default App