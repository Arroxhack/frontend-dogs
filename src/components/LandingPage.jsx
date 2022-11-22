import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./CSS/LandingPage.module.css";


export default function LandingPage() {
  return (
    <div className={styles.backgroundPicture}>

        <NavLink className={styles.navLink} exact to="/home" >

          <button className={styles.button}>
            <p>BRING..</p>
            <p>THE..</p>
            <p>DOGGIES!</p>
          </button>

        </NavLink>
        
    </div>
  )
}
