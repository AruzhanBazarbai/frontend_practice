import React from 'react'
import styles from './FilmList.module.css'
import FilmDetail from '../filmDetail/FilmDetail'

const FilmList = ({films,text,favorites, setFavorites}) => {
  return (
    <div className={styles.wrapper} >
      {films?.length>0 && <p>{text}</p>}
      <div>
        {films && Object.values(films)?.map((item,ind)=><FilmDetail favorites={favorites} setFavorites={setFavorites} key={ind} film={item} />)}
      </div>
    </div>
  )
}

export default FilmList