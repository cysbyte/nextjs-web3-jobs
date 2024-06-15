import JobsAlert from '@/components/home/jobs-alert'
import Search from '@/components/home/search'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import React from 'react'

const page = () => {
  return (
        <main className="container">
        <Header />
        <JobsAlert />
        <Search />
        {/* @ts-expect-error Server Component */}
        <Jobs />
        <Footer />
      </main>
  )
}

export default page