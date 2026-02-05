import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Deskbord from './components/Deskbord'
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
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/deskbord",
        element: <Deskbord />,
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
