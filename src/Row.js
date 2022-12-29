import React, { useEffect, useState } from 'react'
import axios from './axios'
import './row.css'

const Row = ({title, fetUrl}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetUrl)
      setMovies(request.data.results);
    }
    fetchData();
  },[fetUrl])
  return (
    <div className='row'>
      <h2>
        {title}
      </h2>
      <div className='row-posters'>
      {movies.map((movies) => (
        <img className='row-poster' key={movies.id} src={'https://image.tmdb.org/t/p/original'+movies.backdrop_path} />
      ))}
      </div>
    </div>
  )
}

export default Row