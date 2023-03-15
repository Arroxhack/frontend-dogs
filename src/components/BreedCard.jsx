import React from 'react';
import styles from "./CSS/BreedCard.module.css";
import { Link } from 'react-router-dom';

export default function BreedCard({ id, name, image, temperament, min_weight, max_weight}){
    return( 
            <Link className={styles.linkContainer} to={`/breedDetail/${id}`} > 

                    <h5 className={styles.name}>{name}</h5>

                    <img src={image} alt= {`Created breed ${name}`} className={styles.image}/>

                    <h6 className={styles.temperament}>{temperament ? `Temperament: ${temperament}` : `Unknown temperament`}.</h6>

                    <h6 className={styles.weightAndHeight}>{min_weight === 0 ? `Min weight: unknown` : `Min weight: ${min_weight} kg.`}</h6>

                    <h6 className={styles.weightAndHeight}>{max_weight === 0 ? `Max weight: unknown` : `Max weight: ${max_weight} kg.`}</h6>

            </Link>
    ) 
}

