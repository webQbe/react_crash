/* rafce */
import React from 'react'
/* Import React Router Components  */
import {  
          Route, 
          createBrowserRouter, 
          createRoutesFromElements, 
          RouterProvider 
        } from 'react-router-dom';

import Navbar from './components/Navbar'; /* Import JSX component */
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

/* Create router variable */
const router = createBrowserRouter(
  /* createBrowserRouter: Accepts the routes generated below and creates a router instance that manages the application's navigation. */

  createRoutesFromElements(<Route path='/about' element={<h1>My App</h1>} />)
  /* Route: Represents a single route in the application 
     index / path='/': Indicates this is the default route when the app loads
     element: Specifies the component or element to render when this route matches. 
     createRoutesFromElements(): Converts JSX route elements into a data structure that createBrowserRouter() understands. 
    */

);

const App = () => {
  return <RouterProvider router={router} />;
  /* RouterProvider: Makes the router instance (router) available to the entire application &
     Automatically handles navigation events and renders the appropriate components based on the current URL. */
}

export default App