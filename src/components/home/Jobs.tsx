import React from 'react'
import JobCard from '../shared/JobCard'

const Jobs = () => {
  return (
    <section>  
        <h4 className='px-40 my-10'>643 mobile development jobs</h4>

    <div className='w-full h-auto bg-white mt-0 px-40'>

          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
      </div>
    </section>
  )
}

export default Jobs