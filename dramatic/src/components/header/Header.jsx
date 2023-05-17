import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import { SearchBar } from '../../ui';
import {SlPresent} from 'react-icons/sl';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BsFillRecordCircleFill} from 'react-icons/bs';


const menu=['HOME','TV SHOW','MOVIES','NEW']

const Header = ({setSearch,setSearchText,search}) => {
  return (
    <div className={styles.header_wrapper}>
        <Link className={styles.logo} to="/" >DRAMATIC</Link>
        {menu.map((item)=><Link className={styles.menu_item}>{item}</Link>)}
        <SearchBar setSearch={setSearch} setSearchText={setSearchText} search={search}/>
        <SlPresent size={25} color='white' />
        <IoMdNotificationsOutline size={26} color='white' />
        <BsFillRecordCircleFill size={25}  color='white' />
    </div>
  )
}

export default Header