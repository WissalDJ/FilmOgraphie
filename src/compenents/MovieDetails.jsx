// MovieDetails.jsx
import React from "react";
const MovieDetails = ({ movie }) => {
  return (
    <div className="mt-4 p-3 border rounded bg-light shadow-sm">
      <h3 className="text-primary">{movie.title}</h3>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p>
        <strong>Release Year:</strong> {movie.releaseYear}
      </p>
    </div>
  );
};

export default MovieDetails;
