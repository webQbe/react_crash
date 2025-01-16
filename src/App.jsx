/* rafce */
import React from 'react'
/* Import React Router Components  */
import {  
          Route, 
          createBrowserRouter, 
          createRoutesFromElements, 
          RouterProvider 
        } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
       

/* Create router variable */
const router = createBrowserRouter(
  /* createBrowserRouter: Accepts the routes generated below and creates a router instance that manages the application's navigation. */

  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>

    <Route index element={<HomePage />} />  
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='*' element={<NotFoundPage />} />

  </Route>

  /* How It Works?

    Initial Load:
        The application starts at /.
        The router renders the <MainLayout /> component.

    Child Route Rendering:
        Inside <MainLayout />, the <Outlet /> is rendered.
        Since / has a child route marked as index, the <HomePage /> component is rendered within the <Outlet />.
  
  */
)
    /* 
      Route: Represents a single route in the application 
      index / path='/about': Indicates this is the default route when the app loads
      path='*': For any page that is not found
      element: Specifies the component or element to render when this route matches. 
      createRoutesFromElements(): Converts JSX route elements into a data structure that 
      createBrowserRouter() understands. 

      */

);

const App = () => {
  return <RouterProvider router={router} />;
  /* RouterProvider: Makes the router instance (router) available to the entire application &
     Automatically handles navigation events and renders the appropriate components based on the current URL. */
}

export default App