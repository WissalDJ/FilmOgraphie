// SortButtons.jsx
import React from "react";

const SortButtons = ({ sortMovies }) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <button className="btn btn-primary me-2" onClick={() => sortMovies("rating")}>
        Trier par note
      </button>
      <button className="btn btn-secondary" onClick={() => sortMovies("year")}>
        Trier par année
      </button>
    </div>
  );
};

export default SortButtons;
