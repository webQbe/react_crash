/* rafce */
import React from 'react'
import Navbar from './components/Navbar'; /* Import component */
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';


const App = () => {
  return (
    <>
      {/* Using Components 
         Use Devloper Tools in the browser to see components tab */}
      <Navbar />
      <Hero />
      <HomeCards />  
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App