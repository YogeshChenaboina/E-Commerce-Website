import React from 'react'
import img from './images/full-length-body-size-view.jpg'
import Product from './Product'
import styles from './homeCss.module.css'

const Home = () => {
  return (
    <div>
    <div className={styles.main}>
        <div>
        <center>
          Welcome to Apna Shop
          </center>
          </div>
          <div className={styles.welcome}>
          <center>
           <p> We are Here to Help all the Familes discover the <span className={styles.span}> Joy of every day Life</span></p>
            </center>
          </div>
      </div>
      <img src={img} width='100%' height='500vh' />
      <Product/>
    </div>
  )
}

export default Home
