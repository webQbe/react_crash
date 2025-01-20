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
import JobPage, { jobLoader } from './pages/JobPage'; /* Import JobPage component and its associated jobLoader function  */
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';



const App = () => {
  const addJob = async (newJob) => { /* Asynchronous Function */
    /* Add New Job */
    const res = await fetch('/api/jobs', {
        /* fetch() sends an HTTP request to the /api/jobs endpoint 
           await keyword ensures the function waits for the fetch promise to resolve before proceeding.*/
        method: 'POST', 
          /* Create new resources on the server */
        headers: {
          'Content-Type': 'application/json' 
          /* Tells the server that the request body contains JSON data */
        },
        body: JSON.stringify(newJob) 
          /* Converts the newJob JavaScript object into a JSON string for sending structured data in the request */
      }); 
      return; 
        /* The function ends */
  };

  /* Delete Job */
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      /*  fetch() sends an HTTP request to the /api/jobs endpoint with jobId */
      method: 'DELETE', 
        /* Remove selected resource on the server */
    }); 
    return; 
  };

  /* Create router variable */
  const router = createBrowserRouter(
  /* createBrowserRouter: Accepts the routes generated below and creates a router instance that manages the application's navigation. */

  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

      <Route index element={<HomePage />} />  
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/edit-job/:id' element={<EditJobPage />} loader={jobLoader} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob }/>} loader={jobLoader} />
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

      Dynamic Route: 
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />

        The route path /jobs/:id defines a dynamic segment (:id).
        For example:
            Navigating to /jobs/123 makes id equal to 123.
        element Prop:
            Specifies the component to render (<JobPage />).
        loader Prop:
            Assigns the jobLoader function to fetch data before rendering JobPage

        Advantages of This Approach:
          Data Fetching Before Render:
              Ensures data is ready when the component renders, preventing loading flickers.
          Dynamic Routing:
              Supports fetching data specific to a parameterized route (e.g., /jobs/:id).
          Separation of Concerns:
              Keeps the data-fetching logic (jobLoader) separate from the rendering logic (JobPage).
      

      Passing Function to a Component as prop:
          <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />

            1. Triggering the Function:
              The addJob() function is passed to the <AddJobPage /> component as a prop (addJobSubmit()).
              When a user submits the form in <AddJobPage />, the submitForm() function calls addJobSubmit(newJob).

            2. Making the API Request:
                The addJob() function sends the newJob object to the /api/jobs endpoint.

            3. Server Response:
                The server processes the request and (ideally) creates a new job resource.
                
      */



);


  return <RouterProvider router={router} />;
  /* RouterProvider: Makes the router instance (router) available to the entire application &
     Automatically handles navigation events and renders the appropriate components based on the current URL. */
}

  export default App