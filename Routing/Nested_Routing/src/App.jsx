import React from "react";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Deshboard from "./components/Deshboard";
import Navbar from "./components/Navbar";
import Mock_test from "./components/Mock_test";
import Courses from "./components/courses";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";

function App() {

  const router = createBrowserRouter([
{},
{},
{},
{},
{    
  path :"*" ,
  element : <NotFound/>
},


    // Home
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },

    // About
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },

    

    // Dashboard (Parent)
    {
      path: "/deshboard",
      element: (
        <>
          <Navbar />
          <Deshboard />
        </>
      ),

      // ✅ children must be HERE
      children: [

        {
          path: "courses",
          element: <Courses />,
        },

        {
          path: "mock-test",
          element: <Mock_test />,
        },

        {
          path: "reports",
          element: <Reports />,
        },

      ],
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
