import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './requests'

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchToprated);
            setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length-1))])
        }
        fetchData();
    },[])
  return (
    <div className='banner' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie.poster_path}")`,
    backgroundSize: "cover",
    backgroundPosition:"center center",
    opacity:0.7,
    }} >
        <div className='banner_content'>
            <h1 className='banner_title'>{movie.name}</h1>
            <div className='banner_button'>
                <button>Play</button>
                <button>My List</button>
            </div>
            <div className='banner_description'>
                <p>{movie.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Banner