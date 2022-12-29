import React from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import requests from '../requests'
import Row from '../Row'

const Homescreen = () => {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Row title="Top Rated" fetUrl={requests.fetchToprated}/> 
        <Row title="Trending Now" fetUrl={requests.fetchTrending}/> 
        <Row title="Popular" fetUrl={requests.fetchPopular}/> 
        <Row title="Up Coming" fetUrl={requests.fetchUpcoming}/> 
    </div>
  )
}

export default Homescreen