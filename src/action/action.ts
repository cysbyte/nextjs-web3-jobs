'use server'

import prisma from "@/utils/prismadb";
import { kebabCase } from "lodash";

export const submitJob = async (formData: FormData) => {
    const job = await prisma.job.create({
        data: {
            jobId: kebabCase(formData.get('companyName') as string+'-'+formData.get('jobTitle' as string)),
            jobTitle: formData.get('jobTitle') as string,
            jobType: formData.get('jobType') as string,
            jobRole: formData.get('jobRole') as string,
            locationType: formData.get('locationType') as string,
            jobDescription: formData.get('jobDescription') as string,
            preferredApplicantLocation: formData.get('preferredApplicantLocation') as string,
            keywords: formData.get('keywords') as string,
            currency: formData.get('currency') as string,
            minSalary: Number(formData.get('minSalary')),
            maxSalary: Number(formData.get('maxSalary')),
            applyType: formData.get('applyType') as string,
            applyUrl: formData.get('applyUrl') as string,
            applyEmail: formData.get('applyEmail') as string,
            companyName: formData.get('companyName') as string,
        }
    })
    return job
}

export const getJobsFromDB = async () => {
    const jobs = await prisma.job.findMany()
    return jobs
}

export const getJobsByJobId = async (jobId: string) => {
    const job = await prisma.job.findFirst({
        where: {
            jobId: jobId
        }
    })
    return job
}

export const getJobsBySkill = async (skill: string) => {
    const jobs = await prisma.job.findMany({
        where: {
            OR: [
                {
                    jobTitle: {
                        contains: skill
                    },
                    keywords: {
                        contains: skill
                    },
                    jobDescription: {
                        contains: skill
                    }
                }
            ]
        }
    })
    return jobs
}