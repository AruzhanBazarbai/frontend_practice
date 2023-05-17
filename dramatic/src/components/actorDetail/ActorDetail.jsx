import React from 'react'
import styles from './ActorDetail.module.css'

const ActorDetail = ({actor}) => {
    const imageUrl =  'https://image.tmdb.org/t/p/w500';
  return (
    <div className={styles.actor_wrapper}>
        <img src={`${imageUrl}/${actor.profile_path}`}/>
        <p className={styles.original}>${actor.original_name}</p>
        <p className={styles.charachter}>${actor.character}</p>
    </div>
  )
}

export default ActorDetail