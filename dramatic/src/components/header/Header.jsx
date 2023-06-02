import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import { SearchBar } from '../../ui';
import {SlPresent} from 'react-icons/sl';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BsFillRecordCircleFill} from 'react-icons/bs';


const menu=['HOME','TV SHOW','MOVIES','NEW']
const menu_mobile=['USER PROFILE','NOTIFICATIONS','PRESENTS',...menu]

const Header = ({setSearch,setSearchText,search}) => {
  return (
    <div>
        <div className={styles.header_wrapper}>
          <Link className={styles.logo} to="/" >DRAMATIC</Link>
            {menu.map((item)=><Link className={styles.menu_item}>{item}</Link>)}
          <SearchBar setSearch={setSearch} setSearchText={setSearchText} search={search}/>
          <SlPresent size={25} color='white' className='icons' />
          <IoMdNotificationsOutline size={26} color='white' className='icons' />
          <BsFillRecordCircleFill size={25}  color='white' className='icons' />
          <div className={styles.menu_mobile_wrapper}>
              <input type='checkbox' id="menu_checkbox" className={styles.menu_checkbox} />
              <nav role='navigation'>
                  <label for='menu_checkbox' className={styles.toggle_button} data-open='MENU' data-close='CLOSE'></label>
                  <div className={styles.main_mobile_menu}>
                    <ul>
                      {menu_mobile.map((item)=><li><Link className={styles.mobile_menu_item}>{item}</Link></li>)}
                    </ul>
                  </div>
              </nav>
          </div>


        </div>
    </div>
  )
}

export default Header