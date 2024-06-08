'use client'

import React, { FC, useState } from 'react'
import PositionForm from './JobInputForm'

const PostJob:FC = () => {
    const [step, setStep] = useState('create')
    
  return (
      <section className='basis-2/3 py-24 w-full'>
          <h1 className=' text-4xl text-center font-semibold'> Post A Job</h1>
          <div className='flex justify-center items-center my-10'>
              <div className='flex justify-evenly w-full text-xl'>
                  <div className='relative w-full border-b border-b-gray-300 py-3 flex items-center justify-center'>
                      <div className='absolute w-full h-[6px] rounded-full bg-blue-800 -bottom-[3px]'></div>
                      Create
                  </div>
              <div className='w-full border-b border-b-gray-300 py-3 flex items-center justify-center'>Preview</div>
              <div className='w-full border-b border-b-gray-300 py-3 flex items-center justify-center'>Pricing Plan</div>                  
              </div>
              
          </div>
          {step === 'create' && <PositionForm />}
    </section>
  )
}

export default React.memo(PostJob)