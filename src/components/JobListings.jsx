import React from 'react'
import jobs from '../jobs.json'; /* Import data from json file */
import JobAd from '../components/JobAd'; /* Import JobAd component */

const JobListings = () => {
    console.log(jobs); // Log jobs data
  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                { jobs.map((job) => (
                    <JobAd key={ job.id } job={ job } />    
                ))}
            </div>
        </div>
    </section>
  )
}

export default JobListings