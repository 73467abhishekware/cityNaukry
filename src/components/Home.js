import React from 'react'
import HeroBanner from './HeroBanner'
import Categories from './Categories'
import JobList from './JobList'
import HowItWorks from './HowItsWorks'
import JobDetail from './JobDetails'
import PostedJobs from './PostedJobs'
import PasswordReset from './PasswordReset'

function Home() {
  return (
    <>
    <HeroBanner/>
    <PasswordReset/>
    <Categories/>
    <JobList />
    <HowItWorks/>
  
    </>
    
  )
}

export default Home
