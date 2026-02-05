import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Deshboard from './components/Deshboard'
import Navbar from './components/Navbar'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  
    const router = createBrowserRouter(
      [
        {
          path: "/",  
          element : <div>
            <Navbar />
            <Home />
          </div>
        },
        {
          path: "/about",
          element : <div>
            <Navbar />
            <About />
          </div>
        },
        {
          path: "/deshboard",
          element : <div>
            <Navbar />
            <Deshboard />
          </div>
        }
      ]
    );
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
      
    </>
  )
}

export default App
