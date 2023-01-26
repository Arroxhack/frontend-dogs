import React from 'react';
import {useHistory } from 'react-router-dom';
import styles from "./CSS/LandingPage.module.css";


export default function LandingPage() {

  let history = useHistory();

  let handleClick = () => {
    history.push("/home")
  }

  return (
    <div className={styles.backgroundPicture}>

        <button 
        className={styles.newButton}
        onClick={handleClick}
        >
          <p>BRING THE DOGGIES!</p>
        </button> 

    </div>
  )
}
