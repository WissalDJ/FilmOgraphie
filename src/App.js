import React from "react";
import Header from "./compenents/Header";
import SearchPage from "./compenents/SearchBar";
import Movielist from "./compenents/MovieList";
import Detaile from "./compenents/MovieDetails";
import Footer from "./compenents/Footer";
import AddFilmForm from "./compenents/AddFilmForm";
function App() {
  return (
    <>
    <Header />
    <SearchPage />
    <Movielist hundleclick={Detaile} />
    <AddFilmForm />
    <Footer />
    </>
  );
}

export default App;
