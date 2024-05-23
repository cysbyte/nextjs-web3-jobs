import React, { useContext } from 'react'
import PostisionDetailInput from '../shared/PostisionDetailInput'
import JobDescriptionEditor from './JobDescriptionEditor';
import LocationRadio from './LocationRadio'

const PositionForm = () => {


    const jobTypeOptions = ['FullTime', 'Contract', 'Freelance', 'PartTime', 'Internship']
    const jobRoleOptions=['Engineering', 'Design', 'Marketing', 'Operations', 'Customer Support', 'Sales', 'Others']

    return (
        <form>
            <h2 className='text-2xl font-semibold'>Tell us about the position</h2>
            <div className='mt-8'>
                <label className="block text-black text-lg" htmlFor="position">Postion or Job Title <span className=' text-[rgba(255,50,50,1)]'>*</span></label>
                <PostisionDetailInput hasDropdown={false} id='position' placeHolder="e.g. Android Engineer, Customer Support" />
            </div>
            
            <div className='mt-8'>
                <label className="block text-black text-lg" htmlFor="type">Job Type <span className=' text-[rgba(255,50,50,1)]'>*</span></label>
                <PostisionDetailInput hasDropdown={true} id='type' placeHolder='select a job type' options={jobTypeOptions} />
            </div>

            <div className='mt-8'>
                <label className="block text-black text-lg" htmlFor="role">Job Role <span className=' text-[rgba(255,50,50,1)]'>*</span></label>
                <PostisionDetailInput hasDropdown={true} id='role' placeHolder='select a job type' options={jobRoleOptions} />
            </div>

            <div className='mt-8'>
                <label className="block text-black text-lg" >Job Location <span className=' text-[rgba(255,50,50,1)]'>*</span></label>
                <LocationRadio />
            </div>

            <div className='mt-8'>
                <label className="block text-black text-lg" >Job Description <span className=' text-[rgba(255,50,50,1)]'>*</span></label>
                <JobDescriptionEditor/>
            </div>

            
        </form>
    );
}

export default PositionForm