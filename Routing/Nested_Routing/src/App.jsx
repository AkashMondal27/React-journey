import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Deshboard from './components/Deshboard';
import Navbar from './components/Navbar';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
        </div>
      ),
    },
    {
      path: "/deshboard",
      element: (
        <div>
          <Navbar />
          <Deshboard />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
