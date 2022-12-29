import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav_content'>
        <Link to="/">
          <img className='logo' src='https://cdn-icons-png.flaticon.com/512/5977/5977590.png' />
        </Link>
        <Link to="/profile">
          <img className='profile' src='https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_960_720.png' />
        </Link>
      </div>
    </div>
  )
}

export default Nav