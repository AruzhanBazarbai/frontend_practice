import { useEffect, useState, useRef } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header, Footer, Navbar, MainPage,FilmList, FilmPage } from './components';
import './utils/fonts.css';
import { fetchFromAPI } from './utils/fetchFromAPI';

function App() {
  const myRef=useRef(null)
  const [search,setSearch]=useState(false)
  const [searchText,setSearchText]=useState("")
  const [searchResFilms, setSearchResFilms]=useState(null)
  const [favorites, setFavorites]=useState([])
  // console.log(searchResFilms)

  useEffect(()=>{
    if(searchText){
      fetchFromAPI((`search/movie?query=${searchText}`)).then((data)=>setSearchResFilms(data.results))
      myRef.current.scrollIntoView({behavior:'smooth'});
    }
    // const response=await axios.get('https://api.themoviedb.org/3/search/movie',{
    //   params:{
    //     api_key:API_KEY,
    //     query:searchText
    //   }
    // })
    // const results=response.data.results
    // setSearchResFilms(results)
  },[search])
  useEffect(()=>{
    const tempArr=JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(tempArr)
  },[])
  useEffect(()=>{
    if(favorites.length>0){
      localStorage.setItem('favorites',JSON.stringify(favorites))
    }
  },[favorites])

  // function changeFavorites(filmId){
  //   setFavorites([...favorites,filmId])
  // }
  

  return (
    <BrowserRouter>
      <Header search={search} setSearch={setSearch} setSearchText={setSearchText} />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<MainPage favorites={favorites} setFavorites={setFavorites} />} />
        <Route path='/films/:id' element={<FilmPage favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
      <div ref={myRef} className='wrapper_search'>
        <FilmList favorites={favorites} setFavorites={setFavorites} films={searchResFilms} text={"SEARCH RESULTS"}/>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
