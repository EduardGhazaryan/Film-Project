import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./Slices/GenresSlice";
import filmsSlice from "./Slices/FilmsSlice";
import filmsByGenreSlice from "./Slices/FilmsByGenreSlice";


const store = configureStore({
    reducer : {
        genresData : genresSlice,
        filmsData : filmsSlice,
        filmsByGenreData : filmsByGenreSlice,
    }
})


export default store