import { Box, Pagination, ThemeProvider } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {pageNum } from '../../redux/Slices/FilmsSlice'
import { genrePageNum } from '../../redux/Slices/FilmsByGenreSlice'
import {createTheme} from '@mui/material'
import { purple } from '@mui/material/colors'
import { useLocation } from 'react-router-dom'



const pageSize = 1
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#492424',
    },
    
  },
  typography:{
    fontFamily:[
      'Poppins'
    ],
    fontSize: 25,
    fontWeight: 100,
  }
});



const Paginations = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const {genrePageNumber} = useSelector((state)=> state.filmsByGenreData)


  
  const handlePageChange = (event, page)=>{
    let  to = genrePageNumber
     to = (page - 1) * pageSize + pageSize
    window.scrollTo({
      top : 0,
      behavior : "instant"
    })

    location.pathname === '/newFilms' ? dispatch(pageNum(to)) : dispatch(genrePageNum(to))
    
  }


  return (
    <ThemeProvider theme={theme}>
    <Box>
        <Pagination count={30}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        size='large'
        boundaryCount={2}
        shape="rounded"
        color='secondary'
        className='pagination'
        sx={{button:{color: '#FFFFFF',  '&:hover' : {backgroundColor: '#492424'}, backgroundColor : ' #000000', padding : '20px' }}}
        />
    </Box>
    </ThemeProvider>
  )
}

export default Paginations