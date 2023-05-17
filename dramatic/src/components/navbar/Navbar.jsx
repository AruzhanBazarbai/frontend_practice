import React from 'react';
import styles from './Navbar.module.css';
import {BsPeople} from 'react-icons/bs';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';
import {IoSettingsOutline} from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <BsPeople color='#BCA5FF' size={30} />
      <AiOutlineUnorderedList color='#BCA5FF' size={30} />
      <FiDownload color='#BCA5FF' size={30} />
      <IoSettingsOutline color='#BCA5FF' size={30} />
    </div>
  )
}

export default Navbar