import React from 'react'
import { useState, useEffect } from 'react';
import JobAd from '../components/JobAd'; /* Import JobAd component */

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
  /* The useEffect hook:
    Runs only once when the component mounts (due to the empty dependency array []).
    Defines and immediately calls the fetchJobs function. */

    const fetchJobs = async () => {
      try {
            const res = await fetch('http://localhost:8000/jobs');
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

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                { jobs.map((job) => (
                    <JobAd key={ job.id } job={ job } />    
                ))}
            </div>
        </div>
    </section>
  )

  /* JobAd Component:
    A child component that takes a job prop and renders a single job ad.
    Each JobAd has a unique key (the id of the job). */
}

export default JobListings