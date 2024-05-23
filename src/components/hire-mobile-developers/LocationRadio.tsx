'use client'

import React, { useState } from 'react'

const LocationRadio = () => {

  const [locationTypes, setLocationTypes] = useState([
    {
      type: 'Remote',
      checked: false
    },
    {
      type: 'Partly Remote',
      checked: false
    },
    {
      type: 'Onsite',
      checked: false
    }
  ])

  const [type, setType] = useState('Remote');
  return (
    <div className='flex gap-7 mt-2'>
      {locationTypes.map((item, index) => (
        <div key={item.type} className='flex gap-2 items-center justify-center'
          onClick={() => {
            setType(item.type)
            const newLocationTypes = [ ...locationTypes ]
            newLocationTypes.forEach((locationType) => {
              locationType.checked = false
              if (locationType.type === item.type) {
                locationType.checked = true
              }
            })
            setLocationTypes(newLocationTypes)
          }}
        >
          {!item.checked && <div className='w-[19px] h-[19px] bg-white border-[1px] border-gray-400 rounded-full'></div>}
          {item.checked && <div className='flex items-center justify-center w-[19px] h-[19px] bg-white border-[1px] border-slate-900 rounded-full'>
            <div className='w-[14px] h-[14px] bg-slate-900 rounded-full'/>
          </div>}
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
}

export default LocationRadio