import React from 'react';
import SearchBar from './SearchBar';
import Breeds from './Breeds';
import { NavLink } from 'react-router-dom';
import styles from "./CSS/Home.module.css";

export default function Home() {
  return (

    <div className={styles.body}> 

      <div className={styles.searchBarCreateDogContainer}>

        <div className={styles.searchBarDiv}>

          <SearchBar/>

        </div>

        <div className={styles.buttonDiv}>

            <button className={styles.button}>

              <NavLink className={styles.navLink} exact to="/home/createDog">+ Create new breed!</NavLink>

            </button>

        </div>

      </div>
      
      <Breeds/>

    </div>
  )
}

