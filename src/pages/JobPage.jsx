import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom';

/* The JobPage component represents the page that displays job details. */

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();
    
    /* useParams(): extracts the dynamic parts of the URL defined in the route path.
        Retrieves the id Parameter,
        The useParams hook gets the id from the URL when the component is rendered.

       useLoaderData():
        This hook retrieves data loaded by the jobLoader function (defined below) for the current route.
        In this case, jobLoader fetches job data based on the id parameter in the URL.
        
        job.title:
            Displays the title of the job fetched by the jobLoader.
        
    */

  return (<h1>{ job.title }</h1>);
  
};

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);  
    const data = await res.json();
    return data;
}

/* jobLoader(): 
    Purpose:
        The jobLoader function is responsible for fetching data from an API endpoint before rendering the JobPage.

    params.id:
        The params object contains the route parameters (e.g., the id part of /jobs/:id).
        It allows the loader to fetch data specific to the job ID.

    Return Value:
        The fetched job data (data) is returned to the useLoaderData hook in JobPage.
*/

export { JobPage as default, jobLoader };