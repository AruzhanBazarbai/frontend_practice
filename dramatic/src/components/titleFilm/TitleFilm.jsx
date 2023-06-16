import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import {SiImdb} from 'react-icons/si';
import styles from './TitleFilm.module.css';
import {BsFillPlayFill} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import {AiOutlineEye,AiFillHeart} from 'react-icons/ai';

const TitleFilm = ({id,favorites, setFavorites}) => {
    const imageUrl =  'https://image.tmdb.org/t/p/w500';
    const [film, setFilm]=useState(null)
    const [videos,setVideos]=useState(null)
    const [isFav, setIsFav]=useState(favorites?.some((id)=>id===film?.id))
    // console.log(videos)
    function onClickTrailerhandle(){
        const trailerKey=videos?.results[1].key;
        const trailerUrl=`https://www.youtube.com/watch?v=${trailerKey}`;
        window.open(trailerUrl,'_blank')
        // console.log(trailerKey,trailerUrl)
    }
    useEffect(()=>{
        fetchFromAPI(`movie/${id}/videos`).then((data)=>setVideos(data));
        fetchFromAPI(`movie/${id}`).then((data)=>setFilm(data));
    },[])
    function changeIsFav(id){
        setFavorites((!isFav)?[...favorites,id]:favorites.filter((el)=>el!==id))
        setIsFav(!isFav)
    }
  return (
    <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
            < img src={`${imageUrl}${film?.backdrop_path}`} alt="movie poster"/>
        </div>
        <div className={styles.content_wrapper}>
            <p className={styles.title}>{film?.original_title}</p>
            <p className={styles.overview}>{film?.overview}</p>
            <p className={styles.genres} >GENRES</p>
            <div className={styles.genre}>{film?.genres.length>0 && film.genres.map((el)=><p>{el.name},</p>)}</div>
            <div className={styles.buttons}>
                <Link to={`/films/${id}/play`} >
                    {/* <button onClick={()=>onClickTrailerhandle()}>WATCH <BsFillPlayFill/></button> */}
                    WATCH <BsFillPlayFill/>
                </Link>
                <button onClick={()=>changeIsFav(film?.id)} >MY LIST < AiOutlinePlus  /></button>
            </div>
            <div className={styles.actions}>
                <SiImdb color="yellow" size={30} />
                <p className={styles.vote} >{film?.vote_average}</p>
                <p>{film?.release_date.slice(0,4)}</p>
            </div>
        </div>
    </div>
  )
}

export default TitleFilm