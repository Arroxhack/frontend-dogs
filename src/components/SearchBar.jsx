import React from 'react';
import { useState } from 'react' ;
import { searchBreedName } from '../store/actions';
import { useDispatch } from 'react-redux';
import styles from "./CSS/SearchBar.module.css";
import searchImage from "../img/icons8-search-48.png"

export default function SearchBar() {
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()

    let onInputChange = (e) => { 
        e.preventDefault();
        setSearch(e.target.value)
    };

    let handleKeyDown = (e) => {
      if(e.code === "Enter"){
        dispatch(searchBreedName(search));
        setSearch("");
      }
    };

    let handleClick = (e) => {
      e.preventDefault();
      dispatch(searchBreedName(search));
      setSearch("");
    };

  return (
      <div className={styles.divContainer}>
        <input
        className={styles.input}  
        type="text"  
        onChange={onInputChange} 
        onKeyDown={handleKeyDown}
        placeholder='Enter breed name'
        value = {search}
        />
        <button className={styles.buttonSearch} onClick={handleClick}>
          <img src={searchImage} alt="search" className={styles.imageSearch} />
        </button>
      </div>
  )
}
