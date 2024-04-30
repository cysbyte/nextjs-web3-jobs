import React from 'react'

const JobsAlert = () => {
  return (
      <form>
          <h1>Looking for your next mobile development job?</h1>
          <p>Join us and get new mobile jobs email alerts </p>
          <input
            className="input-border focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="Email Address"
          />
          <button type='submit'/>
    </form>
  )
}

export default JobsAlert