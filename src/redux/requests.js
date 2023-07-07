import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchFilms = createAsyncThunk(
    'fetchFilms',
    async function(pageNumber){
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}`)

        return response.data.results
       
    }
)