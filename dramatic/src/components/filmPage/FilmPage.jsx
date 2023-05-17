import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import styles from './FilmPage.module.css'
import TitleFilm from '../titleFilm/TitleFilm';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import FilmInfo from '../filmInfo/FilmInfo';
import FilmList from '../filmList/FilmList';

const FilmPage = ({favorites,setFavorites}) => {
    const imageUrl =  'https://image.tmdb.org/t/p/w500';
    const { id } = useParams();
    const [film, setFilm]=useState(null)
    const [videos,setVideos]=useState(null)
    useEffect(()=>{
        fetchFromAPI(`movie/${id}`).then((data)=>setFilm(data));
        fetchFromAPI(`movie/${id}/videos`).then((data)=>setVideos(data));
    },[])
    console.log(id)
    console.log(film)
    console.log(videos)
  return (
    <div className={styles.body}>
      <div className={styles.main_wrapper}>
        <TitleFilm id={id} favorites={favorites} setFavorites={setFavorites} />
        <FilmInfo id={id} film={film} videos={videos} />
        </div>
    </div>
  )
}

export default FilmPage