import React from 'react'
import './Header.css'  
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        {/* Link is a react router element used as an anchor tag to direct to another links */}
        <Link to="/"> <img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="Not a" /> </Link>
        <Link to="/movies/popular"> <span>Popular <span> Movies </span> </span></Link>
        <Link to="/movies/top_rated"> <span>Top <span>Rated</span> </span></Link>
        <Link to="/movies/upcoming"> <span>Upcoming <span>Movies</span></span></Link>

        
      </div>
    </div>
  )
}

export default Header