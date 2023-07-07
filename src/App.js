import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from './redux/Slices/FilmsSlice';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import FilmsPage from './Pages/FilmsPages/FilmsPage';
import FilmsByGenrePage from './Pages/FilmsByGenrePage/FilmsByGenrePage';
import NewFilms from './Pages/NewFilms/NewFilms';
import Footer from './Components/Footer/Footer';

function App() {
  const dispatch =useDispatch()
  const {pageNumber} = useSelector((state)=>state.filmsData)

  useEffect(()=>{
    dispatch(fetchFilms(pageNumber))
  },[pageNumber])
  return (
    <div className="App">
       <Header/>
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/newFilms' element={<NewFilms/>}/>
          <Route path='/filmPage/:id' element = {<FilmsPage/>}/>
          <Route path='/filmsByGenrePage/:id' element={<FilmsByGenrePage/>} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
