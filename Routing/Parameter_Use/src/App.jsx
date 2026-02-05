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
import Paramcompo from './components/Paramcompo'

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
        },
        {
          path:"/student/:id",
          element :
          <div>
            <Navbar/>
            <Paramcompo/>
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
