import {React,  useEffect,useState } from 'react'
import styles from './FilmInfo.module.css'
import {BsPlayCircle} from 'react-icons/bs'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { Link } from 'react-router-dom';
import ActorList from '../actorList/ActorList';

const FilmInfo = ({id,film,videos}) => {
    const imageUrl =  'https://image.tmdb.org/t/p/w500';
    const [actors,setActors]=useState([])
    useEffect(()=>{
        fetchFromAPI(`movie/${id}/credits`).then((data=>setActors(data.cast)))
    },[])
    function onClickTrailerhandle(){
        const trailerKey=videos?.results[2].key;
        const trailerUrl=`https://www.youtube.com/watch?v=${trailerKey}`;
        window.open(trailerUrl,'_blank')
        // console.log(trailerKey,trailerUrl)
    }
    // console.log(actors)
    
  return (
    <div className={styles.trailer_wrapper}>
        <div className={styles.trailer}>
            <p>TRAILER</p>
            <img src={`${imageUrl}/${film?.backdrop_path}`} />
            {/* <BsPlayCircle size={35} onClick={()=>onClickTrailerhandle() } className={styles.trailer_play_button} /> */}
            <Link to={`/films/${id}/play`}>
                <BsPlayCircle size={35} className={styles.trailer_play_button} />
            </Link>
        </div>
        <div >
            {actors?.length>0 && <ActorList actors={actors} />}
        </div>
    </div>
  )
}

export default FilmInfo