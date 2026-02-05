import React from 'react'
import './App.css'
import Home from './components/Home'  
import About from './components/About'
import Deshboard from './components/Deshboard'
import Navbar from './components/Navbar'

//import react-router-dom components here
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

 //Create browserrouting
 const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element:
        <div>
          <Navbar />
          <About />
        </div>
    },
    {
      path: "/deshboard",
      element: <div>
        <Navbar />
        <Deshboard />
      </div>
    },
   
  ]
 );
function App() {
  
  return (
    <>
      <div>
        {/*Add the RouterProvider here and pass the router to it */}
        <RouterProvider router={router} />
      </div>
      
    </>
  )
}

export default App
