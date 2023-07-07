import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

export const fetchFilmsByGenre =createAsyncThunk(
    'fetchFilmsByGenre',
    async function ({id,genrePageNumber}){
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${id}&page=${genrePageNumber}`)

        return response.data.results
    }
)


const filmsByGenreSlice = createSlice({
    name : 'filmsByGenreSlice',
    initialState : {
        films : [],
        genrePageNumber : 1,
    },
    reducers: {
        genrePageNum(state,action){
            state.genrePageNumber = action.payload
        }
    },
    extraReducers : {
        [fetchFilmsByGenre.pending] : ()=>{

        },
        [fetchFilmsByGenre.fulfilled] : (state,action) =>{
            state.films = action.payload
        },
        [fetchFilmsByGenre.rejected] : ()=>{

        }
    }
})

export const {genrePageNum} = filmsByGenreSlice.actions

export default filmsByGenreSlice.reducer