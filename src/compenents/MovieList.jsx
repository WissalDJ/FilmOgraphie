import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";
import MovieDetails from "./MovieDetails";
import SortButtons from "./ButtonsSort";
import Pagination from "./Pagination";
import FavoritesList from "./Favoris";

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [list,setList] = useState([
    {
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      genre: "Science Fiction",
      rating: 8.8,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      genre: "Crime",
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      releaseYear: 2008,
      genre: "Action",
      rating: 9.0,
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      releaseYear: 1994,
      genre: "Crime",
      rating: 8.9,
    },
    {
      title: "Schindler's List",
      director: "Steven Spielberg",
      releaseYear: 1993,
      genre: "Historical Drama",
      rating: 9.0,
    },
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      releaseYear: 1994,
      genre: "Drama",
      rating: 9.3,
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      releaseYear: 1994,
      genre: "Comedy-Drama",
      rating: 8.8,
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      releaseYear: 1999,
      genre: "Science Fiction",
      rating: 8.7,
    },
    {
      title: "Fight Club",
      director: "David Fincher",
      releaseYear: 1999,
      genre: "Drama",
      rating: 8.8,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson",
      releaseYear: 2003,
      genre: "Fantasy",
      rating: 9.0,
    },
    ]);
   
    const handleClick = (movie) => {
      setSelectedMovie(movie);
    };
    const sortMovies = (option) => {
      let sortedList;
      if (option === "rating") {
        sortedList = [...list].sort((a, b) => b.rating - a.rating); // Descending rating
      } else if (option === "year") {
        sortedList = [...list].sort((a, b) => b.releaseYear - a.releaseYear); // Descending year
      }
      setList(sortedList);
    };
    // Paginate movies
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;  
  const LastMovie = currentPage * moviesPerPage;
  const FirstMovie = LastMovie - moviesPerPage;
  const currentMovies = list.slice(FirstMovie, LastMovie); 
  // Change page
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(list.length / moviesPerPage)) return;
    setCurrentPage(pageNumber);
  };
  // Ajouter ou supprimer un film des favoris
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.title === movie.title)) {
        return prevFavorites.filter((fav) => fav.title !== movie.title);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

    return (
      <div className="container mt-5">
        <h1 style={{fontFamily:"bold",fontSize:50}} className="text-center mb-4">Movie List</h1>
        <FavoritesList favorites={favorites} />
        <SortButtons sortMovies={sortMovies} />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {currentMovies.map((item, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <strong>Genre:</strong> {item.genre}
                  </p>
                  <p className="card-text">
                    <strong>Release Year:</strong> {item.releaseYear}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {item.rating}
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleClick(item)}
                  >
                    Voir Plus
                  </button>
                  <button
                  className="btn btn-primary mt-2"
                  onClick={() => toggleFavorite(item)}
                >
                  {favorites.some((fav) => fav.title === item.title)
                    ? "Retirer des favoris"
                    : "Ajouter aux favoris"}
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
            {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(list.length / moviesPerPage)}
            onPageChange={handlePageChange}
          />
         
          {selectedMovie && <MovieDetails movie={selectedMovie} />}
        <br />

        <br />
      </div>
    );
  };
export default MovieList;        