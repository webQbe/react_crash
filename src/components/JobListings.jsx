import React from 'react'
import { useState, useEffect } from 'react';
import JobAd from '../components/JobAd'; /* Import JobAd component */
import Spinner from './Spinner'; /* Importing the Spinner Component */

const JobListings = ({ isHome = false }) => {
  /* isHome: A boolean prop with a default value of false.
    Determines whether the title of the component displays "Recent Jobs" (for a homepage) or "Browse Jobs" (for a dedicated jobs page). */
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  /* State Management 

      const [jobs, setJobs] = useState([]);

      When the component is rendered for the first time:
          useState([]) initializes the jobs state to an empty array.
      During the component's lifecycle:
          If new job data is fetched, the setJobs function is called with the fetched data to update the state. It replaces the empty array with the fetched data.
    
    */

  useEffect(() => {

    const fetchJobs = async () => {
      /* Limit Job listings on Homepage */
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setJobs(data); /* Replace useState([]) empty array with the fetched data. */

      } catch (error){

          console.log('Error fetching data', error);

      } finally {

          setLoading(false); /* Set loading useState() to false */

      }
      /* fetchJobs:
          Fetches job data from the endpoint http://localhost:8000/jobs.
          Parses the JSON response and updates the jobs state.
          If there's an error during fetching, it logs the error to the console.
          Sets loading to false regardless of success or failure. */

    }

    fetchJobs();

  }, []);

  /* useEffect hook overview:
        The useEffect hook is used to run side effects in functional components.

         Examples of side effects include:
            Fetching data from an API.
            Subscribing to a WebSocket.
            Setting up event listeners. 


        Dependency Array in useEffect:
            The second argument of useEffect is a dependency array, which controls when the effect runs:

            Empty Dependency Array []:
                The effect runs only once, after the initial render of the component.

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


  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>
              { loading ? (
                  <Spinner loading={loading}/>
                ) : 
                (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { jobs.map((job) => (
                        <JobAd key={ job.id } job={ job } />    
                      ))}
                  </div>
                )}              
        </div>
    </section>
  )

  /* JobAd Component:
    A child component that takes a job prop and renders a single job ad.
    Each JobAd has a unique key (the id of the job). */
}

export default JobListings