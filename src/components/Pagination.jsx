import React from 'react';
import styles from "./CSS/Pagination.module.css";
import { currentPageFunction } from '../store/actions';
import { useDispatch } from 'react-redux';


// breedsPerPage -> 8
// totalBreeds -> numero total de perros en estado global breeds
// paginate -> funcion que recibe un numero y setea la pagina actual a ese numero

export default function Pagination({breedsPerPage, totalBreeds}) { // 8 // 175 // setCurrentPage(pageNumber)
    const dispatch = useDispatch();
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalBreeds/breedsPerPage); i++){ // 175 / 8 = 21 // ceil, o sea que si da 21,7 es 22
        pageNumbers.push(i); // Va pusheando los numeros de paginas // ejemplo del 1 al 21
    }

  return (
    <div className={styles.bodyContainer}>
        <div className={styles.paginationDiv}>

            {pageNumbers.map(pageNumber => ( // por cada page number un boton con el numero y que al hacer click se ejecuta la funcion setCurrentPage(pageNumber)
                <li key={pageNumber} className={styles.li}>
                    <button onClick={()=> dispatch(currentPageFunction(pageNumber))} className={styles.buttonPage}>
                        {pageNumber}
                    </button>
                </li>
            ))}

        </div>
    </div>
  )
}
