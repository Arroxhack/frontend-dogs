import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllBreeds, getAllTemperaments} from "../store/actions/index"; 
import Pagination from "./Pagination";
import BreedCard from "./BreedCard";
import styles from "./CSS/Breeds.module.css";

export default function Breeds(){

    const dispatch = useDispatch(); 

    const breeds = useSelector(state => state.breeds);
    // console.log("breeds: ", breeds) 
    
    useEffect(() => { 
        // setLoading(true)
        dispatch(getAllBreeds())
        dispatch(getAllTemperaments())
    }, [dispatch]) 

    // Get current breed
    // const [currentPage, setCurrentPage] = useState(1); // -> pagina actual 1
    const currentPage = useSelector(state => state.currentPage); // -> pagina actual 1
    const [breedsPerPage] = useState(8); // -> 8 perros por pagina
    const indexOfLastBreed = currentPage * breedsPerPage; // -> indice del ultimo perro = pagina actual * 8
    const indexOfFirstBreed = indexOfLastBreed - breedsPerPage; // -> indice del primer perro = indice del ultimo perro - perros por pagina
    const currentBreeds = breeds.slice(indexOfFirstBreed, indexOfLastBreed); // 175 slice(inicio 0, final 8) // del 16 al 24


    return(
        <div className={styles.bodyDiv}> 

            <div className={styles.cardsDivContainer}>
                
                {!breeds.length ?

                <div className={styles.containerLoading}>
                    <h1 className={styles.h1Loading}>Loading</h1>
                    <div className={styles.loading}>
                    </div>
                </div>

                :

                typeof currentBreeds[0] === "string" 
                ? 
                <div className={styles.noCreatedBreedsYet}>
                    {currentBreeds[0]}
                </div> 
                :
                 currentBreeds.map(breed => {
                        return(
                                <BreedCard key={breed.id}
                                id={breed.id} 
                                name={breed.name} 
                                image={breed.image} 
                                temperament={breed.temperament}
                                min_weight={breed.min_weight ? breed.min_weight : 0} 
                                max_weight={breed.max_weight ? breed.max_weight : 0}
                                />
                        )
                })}
            </div>

                <Pagination 
                breedsPerPage={breedsPerPage} // 8
                totalBreeds={breeds.length} // numero total de perros en estado global breeds
                />

        </div>
    )
}


