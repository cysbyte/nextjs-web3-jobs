'use client';

import React from 'react'
import { useSelector } from 'react-redux';

const User = () => {
    const userId = useSelector((state: any) => state.authToken.userId);
    const firstname = useSelector((state: any) => state.authToken.firstname);
  return (
    <div className='text-base lg:text-base'>{firstname}</div>
  )
}

export default User