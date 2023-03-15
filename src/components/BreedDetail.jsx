import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from './DetailCard';
import styles from "./CSS/BreedDetail.module.css";
import { useHistory } from 'react-router-dom';
import { getBreedDetail } from '../store/actions';



export default function BreedDetail(){

    const {id} = useParams();
    const [dogId, setDogId] = useState(null); 
    const history = useHistory();


    useEffect(() => { 
    getBreedDetail(id)
        .then(breedDetail => setDogId(breedDetail))
        .catch(e => console.log(e))
    },[id])


    let handleClick = () => {
        history.push("/home")
    };

    return(
        <div className={styles.body}>

            <button className={styles.homeButton} onClick={handleClick}>
                Home
            </button>

                {dogId ?

                <DetailCard dogId={dogId}/>
      
                : 
                
                <div className={styles.containerLoading}>

                    <h1 className={styles.h1Loading}>Loading</h1>
                    <div className={styles.loading}></div>

                </div>}

        </div>
    ) 
}


