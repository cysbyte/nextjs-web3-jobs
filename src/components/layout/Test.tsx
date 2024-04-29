import React from 'react'

const Test = () => {
  return (
    <div>
          <div className='peer group grid place-items-center h-20 w-20 bg-blue-400 '>
              <div className='h-5 w-5 bg-black group-hover:bg-red-600'>aa</div>
              <div className='h-5 w-5 bg-black group-hover:bg-blue-600'></div>
          </div>
          <div className='h-20 w-20 bg-green-400 peer-hover:bg-orange-500'></div>

          <div></div>
    </div>
  )
}

export default Test