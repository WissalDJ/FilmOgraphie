import React, { useState } from "react";
export default function AddFilmForm() {
    const [titre, setTitre] = useState("");
    const [director, setDirector] = useState("");
    const [releaseYear, setReleaseYear] = useState(0);
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [Show, setShow] = useState(false);
    const [Valide, setValide] = useState(false);
    const [Data, SetData] = useState([]);
    const [errors, setErrors] = useState({}); // State for validation errors

    const validateFields = () => {
        const validationErrors = {};
        if (!titre.trim()) validationErrors.titre = "Le titre est requis.";
        if (!director.trim()) validationErrors.director = "Le réalisateur est requis.";
        if (!releaseYear || releaseYear < 1900 || releaseYear > new Date().getFullYear()) {
            validationErrors.releaseYear = "Entrez une année valide (entre 1900 et l'année actuelle).";
        }
        if (!genre) validationErrors.genre = "Le genre est requis.";
        if (!rating || rating < 0 || rating > 10) {
            validationErrors.rating = "La note doit être entre 0 et 10.";
        }
        return validationErrors;
    };

    const hundleonclick = (event) => {
        event.preventDefault();
        setValide(true);
    };

    const hundledata = (event) => {
        event.preventDefault();
        const validationErrors = validateFields();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setShow(true);
            SetData([
                ...Data,
                { titre, director, releaseYear, genre, rating },
            ]);
            setTitre("");
            setDirector("");
            setReleaseYear(0);
            setGenre("");
            setRating("");
        }
    };

    return (
        <>
            <style>
                {`
                    .error-text {
                        color: red;
                        font-size: 0.9rem;
                        margin-top: 5px;
                    }
                     .container {
                        margin: 20px auto;
                        width: 80%;
                        max-width: 600px;
                        text-align: center;
                        font-family: Arial, sans-serif;
                    }
                    .butn {
                        margin-top: 10px;
                        padding: 10px 20px;
                        background-color: orange;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }  
                    .button:hover {
                        background-color: orange;
                    }  
                    .form-container {
                        background: #f9f9f9;
                        border: 1px solid #ddd;
                        border-radius: 10px;
                        padding: 20px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    .form-container h4 {
                        margin-bottom: 20px;
                    }
                    .form-container input,
                    .form-container select {
                        width: calc(100% - 10px);
                        padding: 10px;
                        margin: 10px 0;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                    }
                    .form-container button {
                        margin-top: 10px;
                        padding: 10px 20px;
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    .form-container button:hover {
                        background-color: orange;
                    }
                    table {
                        margin: 20px auto;
                        border-collapse: collapse;
                        width: 100%;
                        border: 2px solide black;
                    }
                    th,
                    td {
                        border: 1px solid #ddd;
                        padding: 10px;
                        text-align: center;
                    }
                    th {
                        background-color: #007bff;
                        color: white;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }    
                `}
            </style>
            <button type="" className="butn" onClick={hundleonclick}>
                ajouter un Films
            </button>
            <div>
                {Valide ? (
                    <div>
                        <h4 style={{color:"brown",textAlign:"center"}} >New Films</h4>
                        <form onSubmit={hundledata} className="form-container">
                            <fieldset>
                                
                                <label htmlFor="">Titre</label>
                                <input
                                    type="text"
                                    value={titre}
                                    onChange={(e) => setTitre(e.target.value)}
                                />
                                {errors.titre && <p className="error-text">{errors.titre}</p>}
                                <br />
                                <label htmlFor="">Réalisateur</label>
                                <input
                                    type="text"
                                    value={director}
                                    onChange={(e) => setDirector(e.target.value)}
                                />
                                {errors.director && <p className="error-text">{errors.director}</p>}
                                <br />
                                <label htmlFor="">Année de Sortie</label>
                                <input
                                    type="number"
                                    value={releaseYear}
                                    onChange={(e) => setReleaseYear(e.target.value)}
                                />
                                {errors.releaseYear && <p className="error-text">{errors.releaseYear}</p>}
                                <br />
                                <label htmlFor="">Note</label>
                                <input
                                    type="number"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                                {errors.rating && <p className="error-text">{errors.rating}</p>}
                                <br />
                                <label htmlFor="">Genre</label>
                                <select name="genre" onChange={(e) => setGenre(e.target.value)}>
                                    <option value="">Sélectionnez un genre</option>
                                    <option value="Crime">Crime</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Comedy">Comedy</option>
                                </select>
                                {errors.genre && <p className="error-text">{errors.genre}</p>}
                                <br />
                                <button type="submit">Submit</button>
                                <button
                                    type=""
                                    onClick={() => {
                                        setTitre("");
                                        setDirector("");
                                        setReleaseYear("");
                                        setRating("");
                                        setGenre("");
                                    }}
                                >
                                    Initialisation
                                </button>
                            </fieldset>
                        </form>
                        <div>
                            {Show && (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Director</th>
                                            <th>ReleaseYear</th>
                                            <th>Rating</th>
                                            <th>Genre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.titre}</td>
                                                <td>{item.director}</td>
                                                <td>{item.releaseYear}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.genre}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
}
