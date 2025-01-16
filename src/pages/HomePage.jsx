import React from 'react'
import Header from '../components/Header'; /* Import Component */
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';


const HomePage = () => {
  return (
    <>
      <Header />
      <HomeCards />
      <JobListings />
      <ViewAllJobs /> 
    </>
  )
}

export default HomePage