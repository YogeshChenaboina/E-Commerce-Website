import React, { useEffect, useState } from 'react'
import styles from './productCss.module.css'
import axios from 'axios'
import {  useDispatch } from 'react-redux'
import { add } from './store/cartSlice'

const Product = () => {
  const dispatch=useDispatch()
  let [state,setState]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
                setState(res.data)
                console.log(res.data);
                console.log("Data Fetched SuccessFully...");
        })
        .catch(()=>{
              console.log("Data Not Fetched..");
        })
    },[])
    const addToCart=(product)=>{
      dispatch(add(product))
    }
  return (
    <div className={styles.main}>
       {state.map((data)=>{
            return <div key={data.id} className={styles.sub}>
                <h4 className={styles.title}>{data.title}</h4>
                <img src={data.image} className={styles.image}></img>
                <h5 className='price'>${data.price}</h5>
                <button className={styles.btn} onClick={()=>addToCart(data)}>Add to Cart</button>
            </div>
          })} 
    </div>
  )
}

export default Product
