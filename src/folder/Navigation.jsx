import React from 'react'
 import { Link, NavLink } from 'react-router-dom'
import './NavigationCss.css'
import img from './images/apnaShopImg.png'
import {  useSelector } from 'react-redux'
const Navigation = () => {
  const cartProducts=useSelector(state=> state.cart)
  return (
    <div className='main'>
       <div className='home'>
        <Link to='home'><img src={img} alt='Apna' height='100%' width='100%'/></Link>
      </div>
      <div className='others' >
      <NavLink className='nav' to='home'>Home</NavLink>
      <NavLink className='nav' to='product'>Products</NavLink>
      <NavLink className='nav'to='cart' >My Cart<sup>{cartProducts.length}</sup></NavLink>
      <NavLink className='nav' to='contact'>Contacts</NavLink>
      <NavLink className='nav' to='about'>About</NavLink>
      </div>
    </div>
  )
}

export default Navigation
