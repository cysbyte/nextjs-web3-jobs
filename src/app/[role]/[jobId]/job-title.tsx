import React from 'react'

interface IProps{
    jobTitle: string;
    companyName: string
}
const JobTitle = (props: IProps) => {
  return (
      <section className='pt-12 md:pt-32'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl text-gray-900 font-bold md:leading-tighter lg:leading-tighter tracking-tight break-words md:break-normal mt-6 md:mt-7'>
              {props.jobTitle}
          </h1>
          <div className='flex items-center mt-3 md:mt-4'>
              <div></div>
              <h2 className='text-xl md:text-3xl text-gray-900 font-medium leading-none sm:leading-none md:leading-none break-words md:break-normal'>{props.companyName}</h2>
          </div>
    </section>
  )
}

export default JobTitle