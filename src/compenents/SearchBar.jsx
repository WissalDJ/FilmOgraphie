import React, { useState } from "react";
const SearchPage = () => {
    const [FILMS] = useState([
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
    const [filterGenre, setFilterGenre] = useState("");
    const [searchTitle, setSearchTitle] = useState("");

    const filterFilm = FILMS.filter((item) =>
        (filterGenre ? item.genre.toLowerCase().includes(filterGenre.toLowerCase()) : true) ||
        (searchTitle ? item.title.toLowerCase().includes(searchTitle.toLowerCase()) : true)
    );
    return (
        <>
            <h3>Recherche de films</h3>
            <div>
                <label htmlFor="titleSearch">Par Titre : </label>
                <input id="titleSearch"type="text" placeholder="Titre du film"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="genreSearch">Par Genre : </label>
                <input id="genreSearch" type="text" placeholder="Genre du film"
                    value={filterGenre}
                    onChange={(e) => setFilterGenre(e.target.value)}
                />
            </div>
            <h4>Résultats :</h4>
            <ul>
                {filterFilm.length > 0 ? (
                    filterFilm.map((film, index) => (
                        <li key={index}>
                            <strong>title: <em>{film.title}</em></strong>- releaseYear: (<em>{film.releaseYear}</em>) - Genre: <em>{film.genre}</em> -{" "}
                            director: <em>{film.director}</em> - Note: <em>{film.rating}</em>
                        </li>
                    ))
                ) : (
                    <p>Aucun film trouvé</p>
                )}
            </ul>
        </>
    );
};

export default SearchPage;
