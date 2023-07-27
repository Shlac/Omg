import React, { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 10001,
      title: 'Aventuras en el Espacio',
      overview: 'Una emocionante aventura espacial en busca de nuevos planetas habitables.',
      poster_path: '/ruta/imagen-aventuras-espacio.jpg', // Reemplaza con la URL de una imagen ficticia
      videoLink: 'https://www.example.com/pelicula-aventuras-espacio', // Reemplaza con el enlace del video de la película
    },
    // Agregar más películas aquí...
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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
              <img src={movie.poster_path} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="movie-details">
          <button onClick={handleBackButton}>Retroceso</button>
          <h2>{selectedMovie.title}</h2>
          <img src={selectedMovie.poster_path} alt={selectedMovie.title} />
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
