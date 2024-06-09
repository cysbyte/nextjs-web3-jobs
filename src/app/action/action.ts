'use server'

import prisma from "@/utils/prismadb";

export const submitJob = async (formData: FormData) => {
    const job = await prisma.job.create({
        data: {
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