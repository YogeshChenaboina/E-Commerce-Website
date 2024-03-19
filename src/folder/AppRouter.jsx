import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Cart from './Cart'
import Product from './Product'
import About1 from './About1'
import Contacts from './Contacts'
import Thank from './Thank'

const AppRouter = () => {
    let route=createBrowserRouter(
        [
            {
                path:'/',
                element:<Layout/>,
                children:[{
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/home',
                    element:<Home/>
                },
                {
                    path:'/cart',
                    element:<Cart/>
                },
                {
                    path:'/product',
                    element:<Product/>
                },
                {
                    path:'/cart/:id',
                    element:<Cart/>
                },
                {
                    path:'/about',
                    element:<About1/>
                },
                {
                    path:'/contact',
                    element:<Contacts/>
                },
                {
                    path:'/thank',
                    element:<Thank/>
                }
                ]
                
            }
        ]
    )
  return (
    <div>
      <div>
      <RouterProvider router={route}/>
    </div>
    </div>
  )
}

export default AppRouter
