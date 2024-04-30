import React from 'react'

const JobsAlert = () => {
  return (
      <form className='mt-20 mx-40 py-32 bg-slate-100 rounded-3xl'>
          <h1 className=' text-[2rem] font-semibold text-center'>Looking for your next mobile development job?</h1>
          <p className=' font-normal text-lg text-center mt-4 text-slate-500'>Join us and get new mobile jobs email alerts </p>
          <div className='flex w-2/4 mt-10 mx-auto gap-1'>
          <input
            className="appearance-none border rounded-l-md py-4 text-gray-700 leading-tight placeholder-gray-500 placeholder:text-lg placeholder:pl-0 px-3 focus:outline-none focus:shadow-outline w-3/4"
            id="email"
            name="email"
            type="text"
            placeholder="Email Address"
          />
          <button className='px-10 py-2 bg-purple-500 rounded-r-md text-white' type='submit'>Subscribe</button>              
          </div>

    </form>
  )
}

export default JobsAlert