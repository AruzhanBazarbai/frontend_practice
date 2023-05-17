import React from 'react'
import styles from './Footer.module.css';
import {CiFacebook} from 'react-icons/ci';
import {TiSocialLinkedinCircular, TiSocialTwitterCircular} from 'react-icons/ti';


const footer_data=[
  {
    Name: 'NAVIGATION',
    Items: ['Home', 'FAQ', 'Investor Relations', 'Jobs', 'About Us', 'Help Centre']
  },
  {
    Name: 'LEGAL',
    Items: ['Privacy Policy', 'Terms of Service', 'Cookie Preferences', 'Corporate Information']
  },
  {
    Name: 'TALK TO US',
    Items: ['support@ercom.com', '+123 456 789']
  },
]

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.main_wrapper}>
      <div className={styles.input} >
        <select name="languages" id="lngs">
          <option value="english">English</option>
          <option value="русский">Русский</option>
          <option value="қазақша">Қазақша</option>
        </select>
      </div>
      {footer_data.length>0 && footer_data.map((item)=><div><p><strong>{item.Name}</strong></p> <div>{item.Items.map((el)=><p>{el}</p>)}</div> </div>)}
      <div className={styles.soc_net}>
        <p><strong>FOLLOW US</strong></p>
        <div >
          <CiFacebook size={28} />
          < TiSocialLinkedinCircular size={31} />
          <TiSocialTwitterCircular size={31} />
        </div>
      </div>
      </div>
      <div className={styles.secondary_wrapper}>
        © 2022 Dramatic. All Rights Reserved. 
      </div>
    </div>
  )
}

export default Footer