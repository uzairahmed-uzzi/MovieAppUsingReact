import React from 'react'
import propTypes from 'prop-types'
import './Movie.css'

const Movie = (props) => {
  return (
    <div className='movieBox'>
        <a
        href={props.lnk}
        target='_blank'
        >
        <img 
        className='movieImage'
            src={props.src}
        
            title={props.name}
        />

        <h3 className="movieName">{props.name}</h3>
        </a>
    </div>
  )
    
}
Movie.propTypes={
    name:propTypes.string,
    lnk:propTypes.string,
    src:propTypes.string,
    
},
Movie.defaultProps={
    name:"Iron Man 2008",
    lnk:"https://www.justwatch.com/us/movie/iron-man",
    src:"https://th.bing.com/th/id/R.09621202e26c81e5cac6feab7da6ba2e?rik=74t0zggOknNA8g&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fgSDoME541NMgSEXydXgG6BFc47U.jpg&ehk=1LnhWHNmZC8jAupjLzwPDulHImIkkqEvYwPHccE14w0%3d&risl=&pid=ImgRaw&r=0"
}
export default Movie