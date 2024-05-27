'use client'

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import PostisionDetailInput from '../shared/PostisionDetailInput'
import JobDescriptionEditor from './JobDescriptionEditor';
import LocationRadio from './LocationRadio';
import * as z from 'zod';
import Tiptap from './TipTap';
import { EditorConvertToHTML } from './RichTextEditor';

const PositionForm = () => {

    const formSchema = z.object({
        position: z
            .string()
            .min(5, { message: 'the position is not long enough' })
            .max(100, { message: "it's too long" })
            .trim(),
        
        description: z
            .string()
            .min(5, { message: 'the description is not long enough' })
            .max(10000, { message: 'description is too long' })
            .trim(),
        
    })

    const form = useForm<z.infer<typeof formSchema>>({
        mode: 'onChange',
        defaultValues: {
            position: '',
            description: '',
        }
    })
    const jobTypeOptions = ['FullTime', 'Contract', 'Freelance', 'PartTime', 'Internship']
    const jobRoleOptions=['Engineering', 'Design', 'Marketing', 'Operations', 'Customer Support', 'Sales', 'Others']

    const [content, setContent] = useState('')
    const handleContentChange = (content: string) => {
        setContent(content)
    }
    return (
        <form className='w-full mx-auto mb-10'>
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
                <label className="block text-black text-lg" htmlFor='description'>Job Description <span className=' text-[rgba(255,50,50,1)]'>*</span></label>
                {/* <Tiptap content={content} onChange={ (content)=>setContent(content)} />  */}
                <EditorConvertToHTML/>
            </div>

            
        </form>
    );
}

export default PositionForm