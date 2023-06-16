import React, { useState, useEffect } from 'react';
import styles from './FilmDetail.module.css';
import {SiImdb} from 'react-icons/si';
import {AiOutlineEye,AiFillHeart} from 'react-icons/ai';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { Link } from 'react-router-dom';

const FilmDetail = ({film,favorites, setFavorites}) => {
    const imageUrl =  'https://image.tmdb.org/t/p/w500';
     const [videos,setVideos]=useState(null)
    useEffect(()=>{
        // fetchFromAPI(`movie/${film.id}`).then((data)=>setFilm(data));
        fetchFromAPI(`movie/${film.id}/videos`).then((data)=>setVideos(data));
    },[])
    const [isFav, setIsFav]=useState(favorites?.some((id)=>id===film.id))
    function changeIsFav(id){
        setFavorites((!isFav)?[...favorites,id]:favorites.filter((el)=>el!==id))
        setIsFav(!isFav)
    }
    // function onClickTrailerhandle(){
    //     const trailerKey=videos?.results[1].key;
    //     const trailerUrl=`https://www.youtube.com/watch?v=${trailerKey}`;
    //     window.open(trailerUrl,'_blank')
    //     console.log(trailerKey,trailerUrl)
    // }
  return (
    <div className={styles.detail_wrapper}>
        {/* <p>{film.id}</p> */}
        <div className={styles.first_block}>
            < img src={`${imageUrl}${film.poster_path}`} alt="movie poster"/>
            <p className={styles.title}>{film.original_title}</p>
        </div>
        <div>
            <p className={styles.release_date} >{film.release_date.slice(0,4)}</p>
            <div className={styles.add}>
                <div>
                    <SiImdb color="yellow" size={22} />
                    <p>{film.vote_average}</p>
                </div>
                <div>
                    <Link to={`/films/${film?.id}`} ><AiOutlineEye style={{'cursor':'pointer'}} color='white' size={15}/></Link>
                    <AiFillHeart style={{'cursor':'pointer'}} color={`${isFav?"red":"white"}`} size={15} onClick={()=>changeIsFav(film.id)} />
                </div>
            </div>
            </div>
        {/* <p>{film.overview}</p>
        <p>{film.popularity}</p>
        {/* < img src={`${imageUrl}${film.backdrop_path}`} alt="movie poster2"/> */}
        {/* <p>{film.title}</p>
        <p>{film.vote_count}</p>  */}
    </div>
  )
}

export default FilmDetail