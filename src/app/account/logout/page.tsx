import React from 'react'
import LogoutButton from './logout-button'


const page = () => {

  return (
    <article>
      <div className="text-lg">
        Do you want to <strong>logout</strong> your account?
      </div>
      <div className="my-10">
        <LogoutButton/>
      </div>

    </article>
  )
}

export default page

