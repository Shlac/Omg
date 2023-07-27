import React, { useState, useEffect } from 'react';

const API_KEY = 'TU_CLAVE_DE_API_TMDB'; // Obtén tu clave de API de The Movie Database

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Cargar las películas desde la base de datos (API de TMDb) al cargar la página
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para mostrar los detalles de una película
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Función para regresar a la página principal desde la vista de detalles
  const handleBackButton = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <h1>Películas</h1>
      {!selectedMovie ? (
        <div className="grid-container">
          {movies.map((movie) => (
            <div key={movie.id} className="grid-item" onClick={() => handleMovieClick(movie)}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="movie-details">
          <button onClick={handleBackButton}>Retroceso</button>
          <h2>{selectedMovie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
          <p>{selectedMovie.overview}</p>
          <iframe
            title={selectedMovie.title}
            width="560"
            height="315"
            src={selectedMovie.videoLink}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default App;
    
