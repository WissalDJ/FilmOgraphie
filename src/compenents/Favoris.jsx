import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous d'importer Bootstrap si ce n'est pas déjà fait.

const FavoritesList = ({ favorites }) => {
  return (
    <div className="container mb-4">
      <h3 className="text-center my-4">Films Favoris</h3>
      {favorites.length === 0 ? (
        <p className="text-center text-muted">Aucun film favori pour l'instant.</p>
      ) : (
        <div className="list-group">
          {favorites.map((movie, index) => (
            <div className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-3 rounded">
              <div>
                <h5 className="mb-1 text-dark">{movie.title}</h5>
                <p className="mb-1 text-muted">{movie.director}</p>
                <p className="mb-1 text-muted"><strong>Genre:</strong> {movie.genre}</p>
                <p className="mb-1 text-muted"><strong>Année:</strong> {movie.releaseYear}</p>
                <p className="mb-1 text-muted"><strong>Note:</strong> {movie.rating}</p>
              </div>
              <div className="d-flex flex-column align-items-end">
                <button className="btn btn-danger btn-sm">Retirer</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
