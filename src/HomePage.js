// src/HomePage.js
import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Import CSS for styling

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchMovies = async () => {
      try {
        // This is a placeholder URL; replace it with your actual API endpoint
        const response = await fetch('https://api.example.com/movies');
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="home-page">
      <h1>Movie Listings</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.releaseDate}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
