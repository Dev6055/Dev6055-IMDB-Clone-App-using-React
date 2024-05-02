import React, { useEffect, useState } from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";

// React responsive carousel import
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  // Fetching data from api
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="poster">

        {/* Carousel element from npm react responsive carousel  */}
        <Carousel
          showThumbs={false}
          // autoPlay={true}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {/* {movie ? movie.original_title : ""} */}
                  {movie.original_title.length >30 ? movie.original_title.slice(0,30)+"..." : `${movie.original_title}`}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}  {/* font awesome icon used  */}
                   
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview.slice(0,200)+"..." : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>

        {/* Delete this code  */}
        {/* <Search/> */}

        <MovieList />
      </div>
    </>
  );
};

export default Home;
