import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

export const fetchFilms = createAsyncThunk(
    'fetchFilms',
    async function(pageNumber){
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}`)

        return response.data.results
       
    }

    
)


const filmsSlice = createSlice({
    name : "filmsSlice",
    initialState : {
        films : [],
        pageNumber : 1,
    },
    reducers : {
        pageNum(state,action){
            state.pageNumber = action.payload
        }
    },

    extraReducers : {
        [fetchFilms.pending] : (state,action) =>{

        },
        [fetchFilms.fulfilled] : (state,action) =>{
            state.films = action.payload
        },
        [fetchFilms.rejected] : (state,action) =>{

        },
    }
})


export const {pageNum} = filmsSlice.actions
export default filmsSlice.reducer