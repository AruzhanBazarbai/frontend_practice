import  {React, useState,useEffect } from 'react'
import styles from "./VideoPage.module.css"
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'

const VideoDetail = () => {
  const [video,setVideo]=useState(null)
  const [trailerKey, setTrailerKey]=useState(null)
  const [loading,setLoading]=useState(true)
  const id=useParams()
  useEffect(()=>{
      fetchFromAPI(`movie/${id.id}/videos`).then((data)=>setVideo(data));
      setLoading(false)
    },[])
    useEffect(()=>{
      if(!loading){
        setTrailerKey(video?.results[1]?.key);
      }
    },[video])
    console.log(id.id)
    console.log(video)
  return (
    <div className={styles.video_wrapper}>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/siIe68er4-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <video controls width="100%">
            <source src="https://www.youtube.com/embed/siIe68er4-M" type="video/mp4" />
            Sorry, but you are a stupid
        </video> */}
        <iframe width="100%" height="600" src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoDetail