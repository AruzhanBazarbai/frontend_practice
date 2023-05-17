import {React,useState} from 'react'
import {BiSearch} from 'react-icons/bi';
import styles from './Searchbar.module.css';

const SearchBar = ({setSearch,setSearchText,search}) => {
  const [text,setText]=useState("")
  function onSubmitHandler(event){
      event.preventDefault()
      setSearch(!search)
      setSearchText(text)
      setText("")
  }
  return (
        <form className={styles.searchbar_wrapper} onSubmit={onSubmitHandler}>
          <input type="text" placeholder='SEARCH' value={text} onChange={(e)=>setText(e.target.value)} />
          <button type='submit '><BiSearch size={25} color='white' /></button>
        </form>
  )
}

export default SearchBar