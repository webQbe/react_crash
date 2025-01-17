import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; /* useParams hook is a part of React Router */
import Spinner from '../components/Spinner';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] =  useState(null);
    const [loading, setLoading] = useState(true);

    /* useParams() extracts the dynamic parts of the URL defined in the route path.

        How It Works in the Code

        Steps:

          1. const { id } = useParams();
             Retrieve the id Parameter
                The useParams hook gets the id from the URL when the component is rendered.

          2. const res = await fetch(`/api/jobs/${id}`);
             Fetch Data Based on the id
                fetchJob() sends a request to the API endpoint /api/jobs/:id, replacing :id with the actual value from the URL (e.g., /api/jobs/2)

    */

    useEffect(() => {

        const fetchJob = async () => {

            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data); /* Replace useState(null) with the fetched data. */
                console.log(data);
    
          } catch (error){
    
              console.log('Error fetching data', error);
    
          } finally {
    
              setLoading(false); /* Set loading useState() to false */
    
          }

        }
        fetchJob(); 
    }, [])  

    /* useEffect Overview:
        The useEffect hook is used to run side effects in functional components.

         Examples of side effects include:
            Fetching data from an API.
            Subscribing to a WebSocket.
            Setting up event listeners. 


        Dependency Array in useEffect:
            The second argument of useEffect is a dependency array, which controls when the effect runs:

            Empty Dependency Array []:
                The effect runs only once, after the initial render of the component.
                This is similar to the behavior of componentDidMount in class components.

            No Dependency Array:
                The effect runs after every render, which can cause performance issues if not used carefully.

            Specific Dependencies:
                The effect runs only when the specified dependencies change.

                useEffect(() => {
                    console.log('Effect runs when count changes');
                    }, [count]); // Runs only when `count` changes


            Why Use an Empty Dependency Array?

            An empty dependency array is commonly used when:
                You want to fetch data or set up something (e.g., event listeners) once, when the component is first rendered.
                It ensures that the effect runs only once, avoiding unnecessary repeated executions.


            How It Works Internally

                React keeps track of the dependencies in the array.
                If the array is empty, React knows there are no dependencies to watch, so the effect runs once and doesn't run again unless the component unmounts and remounts.
    */

  return loading ? <Spinner /> : (<h1>{ job.title }</h1>);
  
}

export default JobPage