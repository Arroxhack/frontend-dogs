import React from 'react';
import { useDispatch } from 'react-redux';
import { sort } from '../store/actions';
import styles from "./CSS/Order.module.css";


export default function Order() {
  
    const dispatch = useDispatch();

    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

  return (
    <div className={styles.orderSelectDiv}>
      <select name="select" onChange={onSelectChange} className={styles.select}>
          <option value="ascendente">Order</option>
          <option value="ascendente">A - Z</option>
          <option value="descendente">Z - A</option>
          <option value="minWeight">Min - Max weight</option>
          <option value="maxWeight">Max - Min weight</option> 
      </select>
    </div>
  )
}
