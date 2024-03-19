import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Provider } from 'react-redux'
import store from './store/store'


const Layout = () => {
  return (
    <div>
      <Provider store={store}>
      <Navigation/>
      <Outlet/>
      <Footer/>
      </Provider>
    </div>
  )
}

export default Layout
