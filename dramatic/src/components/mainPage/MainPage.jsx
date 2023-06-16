import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.css'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import FilmList from '../filmList/FilmList';
import {SlArrowDown,SlArrowUp} from 'react-icons/sl';
import TitleFilm from '../titleFilm/TitleFilm';


const MainPage = ({favorites,setFavorites}) => {
  const [topRatedFilms, setTopratedFilms]=useState(null);
  const [recommendedFilms, setRecommendedFilms]=useState(null)
  const [popularFilms, setPopularFilms]=useState(null)
  const [show,setShow]=useState(true)
  
  // console.log(topRatedFilms && Object.values(topRatedFilms))

  useEffect(()=>{
    fetchFromAPI('movie/top_rated').then((data)=>setTopratedFilms(data.results));    
    fetchFromAPI('movie/now_playing').then((data)=>setRecommendedFilms(data.results));    
    fetchFromAPI('movie/popular').then((data)=>setPopularFilms(data.results));    
  },[])

  function showVisibleHandler(){
    setShow(!show);
  }

  // console.log(topRatedFilms)
  
  return (
    <div className={styles.body}>
      <div className={styles.main_wrapper}>
      <TitleFilm id="447365" favorites={favorites} setFavorites={setFavorites} />
      <FilmList favorites={favorites} setFavorites={setFavorites} films={topRatedFilms} text={"MOVIES YOU MUST WATCH"}/>
      <FilmList favorites={favorites} setFavorites={setFavorites} films={recommendedFilms} text={"RECOMMENDED FOR YOU"}/>
      {!show && <FilmList favorites={favorites} setFavorites={setFavorites} films={popularFilms} text={"POPULAR FILMS"}/>}
      
      <div className={styles.button_wrapper}>
        <div className={styles.button}>
          <button onClick={()=>showVisibleHandler()}>{(show)?"Show More":"Hide"}{(show)?<SlArrowDown style={{"padding-left":"10px"}} color="white" />:<SlArrowUp style={{"padding-left":"10px"}} color="white" />}</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainPage