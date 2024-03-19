import React, { useEffect, useState } from 'react'
import styles from './cartCss.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove, increaseQuantity, decreaseQuantity, removeAll } from './store/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
   const productCart=useSelector(state=>state.cart)
   const dispatch=useDispatch()
   const removeToCart=(id)=>{
        dispatch(remove(id))
   }

   const incrementQuantity = (id) => {
    dispatch(increaseQuantity(id));
};

const decrementQuantity = (id) => {
    dispatch(decreaseQuantity(id));
};

const clearCart = () => {
  dispatch(removeAll());
};
   let [status,setStatus]=useState(false)
   useEffect(()=>{
    if(productCart.length>0){
      setStatus(true)
     }
     else{
      setStatus(false)
     }
   },[status,productCart])
   console.log(status)
   console.log(productCart.length)

   const totalPrices = productCart.map(item => item.price * item.quantity);
    const totalPrice = totalPrices.reduce((total, price) => total + price, 0);
  return (
   <>
      <div className={styles.main}> 
        {status==true? <div>
          <div className={styles.heading}>
          <span className={styles.pro}>Name of the Product</span>
          <span className={styles.dec}>Decrement Of Quantity</span>
         
          <span className={styles.qua}>Quantity/Price</span>
          <span className={styles.dec}>Increment Of Quantity</span>
          <span className={styles.remo}>REMOVE</span>
          </div>
       {productCart.map((data)=>{
            return <div key={data.id} className={styles.sub}>
                <h4 className={styles.title}>{data.title}</h4>
                <img src={data.image} className={styles.image}></img>
                <button onClick={() => decrementQuantity(data.id)} className={styles.btn} >-</button>
                <div className={styles.quanprice}>

                <span className={styles.quantity}>{data.quantity}</span>
                <h5 className={styles.price}>${(data.price*data.quantity).toFixed(2)}</h5> 
               
                </div>
               <button onClick={() => incrementQuantity(data.id)} className={styles.btn} >+</button>
               <button onClick={()=>removeToCart(data.id) } className={styles.rem}>Remove Item</button> 
            </div>
          })}
<div className={styles.bottom}>
  <div className={styles.empty}>

  </div>
<div className={styles.totalSection}>
                        <h4 className={styles.totalPrice}>Overall Total:<span className={styles.totalpricespan}>${totalPrice.toFixed(2)}</span></h4>
                    </div>
                    <div className={styles.buytotal}>
                   <button onClick={clearCart} className={styles.buyBtn}> <Link to='/thank'>BUY</Link> </button>
                   <button onClick={clearCart} className={styles.clearCartBtn}>Clear Cart</button>
                   </div>
                   </div>
                  
    </div>:<div><center><h1>No Items Selected...</h1></center></div>}
       
    </div>
   </>
  )
}

export default Cart
