import {React,useState} from 'react'
import ActorDetail from '../actorDetail/ActorDetail'
import styles from './ActorList.module.css'
import {SlArrowDown,SlArrowUp} from 'react-icons/sl';

const ActorList = ({actors}) => {
    const [show,setShow]=useState(true)
    function showVisibleHandler(){
    setShow(!show);
  }
  return (
    <div className={styles.actors_wrapper}>
        <p>CAST AND CREW INFO</p>
        <div className={styles.actors}>
            {actors?.length>0 && actors.map((el,ind)=> (!show || ind<5)?<ActorDetail key={ind} actor={el} />:"" )}
        </div>
        <div className={styles.button_wrapper}>
            <div className={styles.button}>
                <button onClick={()=>showVisibleHandler()}>{(show)?"Show More":"Hide"}{(show)?<SlArrowDown style={{"padding-left":"10px"}} color="white" />:<SlArrowUp style={{"padding-left":"10px"}} color="white" />}</button>
            </div>
        </div>
    </div>
  )
}

export default ActorList