import { useJobDetailStore } from '@/app/store/job-detail-store';
import React, { FC } from 'react';
import { UseFormGetValues } from 'react-hook-form';
import { FormFields } from './job-post-form';
import DOMPurify, { sanitize } from 'dompurify';

interface IProps {
  getValues?: UseFormGetValues<FormFields>;
}

const JobPreview:FC<IProps> = (props) => {

    const sanitizedHtml = DOMPurify.sanitize(props.getValues?.('jobDescription') as string);

  return (
      <section>
      <h1 className=' font-semibold text-2xl'>Job Detail Preview</h1>
      <div>
        <h3 className=' font-semibold text-lg mt-6'>Job Title</h3>
        <p className='mt-4 text-gray-800'>{props.getValues?.('jobTitle')}</p>
      </div>
      <div>
        <h3 className=' font-semibold text-lg mt-6'>Job Type</h3>
        <p className='mt-4 text-gray-800'>{props.getValues?.('jobType')}</p>
      </div>
      <div>
        <h3 className=' font-semibold text-lg mt-6'>Job Role</h3>
        <p className='mt-4 text-gray-800'>{props.getValues?.('jobRole')}</p>
      </div>
      <div>
        <h3 className=' font-semibold text-lg mt-6'>Job Location</h3>
        <p className='mt-4 text-gray-800'>{props.getValues?.('locationType')}</p>
      </div>
      <div>
        <h3 className=' font-semibold text-lg mt-6'>Job Description</h3>
        <p dangerouslySetInnerHTML={{__html: sanitizedHtml}} className='mt-4 list-inside text-gray-800 leading-8'></p>
      </div>
      <div>
        <h3 className=' font-semibold text-lg mt-6'>Preferred Applicant Locations</h3>
        <p className='mt-4 text-gray-800'>{props.getValues?.('preferredApplicantLocation')}</p>
      </div>
      

    </section>
  )
}

export default React.memo(JobPreview)