import React from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Introduction from './components/Introduction';
import Explore from './components/Explore';
import Community from './components/Community';

function App() {
  const router = createBrowserRouter([
    {
     path: "/",
     element: <><Navbar/><Home/></>
    },
    {
      path:"/details",
      element:<><Navbar/><Details/></>
    },
    {
      path:"/introduction",
      element: <><Navbar/><Introduction/></>
    },
    {
      path:"/explore",
      element: <><Navbar/><Explore/></>
    },
    {
      path:"/community",
      element: <><Navbar/><Community/></>
    }
])
  return (
    <>
     
    <RouterProvider router={router}/>
   
    </>

 
  )
}

export default App
