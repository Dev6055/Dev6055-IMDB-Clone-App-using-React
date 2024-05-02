

import Home from './Pages/Home/Home'
// import About from './Pages/About'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Header from './Components/Header/Header';
// import Footer from './Components/Footer';

import './App.css';
import MovieList from './Components/MovieList/MovieList';
import Movie from './Components/MovieDetail/Movie';

function App() {

  return (
    <>

        {/* React router Dom used for navigation  to diffrent pages without page reloading*/}
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='movie/:id' element={ <Movie/>} /> 
        <Route path='movies/:type' element={<MovieList/>} /> 
        <Route path='/*' element={<h1> Error  </h1>} /> 

      </Routes>
    </BrowserRouter>

    {/* <Footer/> */}
    </>
  )
}

export default App
