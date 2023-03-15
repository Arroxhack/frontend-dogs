import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import Breeds from './Breeds';
import styles from "./CSS/Home.module.css";
import Order from './Order';
import Filter from './Filter';
import {useHistory } from 'react-router-dom';

export default function Home() {

  const breeds = useSelector(state => state.breeds);

  let history = useHistory();

  let handleClick = () => {
    history.push("/home/createDog")
  }

  return (

    <div className={styles.body}> 

      {/* Header container */}
      <div className={styles.headerDivContainer}>

          {/* Searchbar */}
          <div className={styles.searchBarDiv}>
            <SearchBar/>
          </div>

          {/* Button-Order-Filter container */}
          <div className={styles.orderFilterButtonContainer}>

            {/* Order and Filter */}
            <div className={styles.orderAndFilterDiv}>
              <Order/>
              <Filter breeds={breeds}/>
            </div>

            {/* Button */}
            <div className={styles.buttonDiv}>
                <button 
                className={styles.button}
                onClick={handleClick}
                >
                  <p>CREATE NEW BREED</p>
                </button> 
            </div>

          </div>

      </div>
      
      <Breeds/>

    </div>
  )
}

