"use client";

import { useEmailMessage } from "@/app/store/email-message-store";
import Spinner from "@/components/shared/spinner";
import { DevTool } from "@hookform/devtools";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

const SignUpForm = () => {
  type FormFields = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { isSubmitted, errors, isSubmitting, isSubmitSuccessful },
    control,
  } = useForm<FormFields>({
    defaultValues: {},
  });

  const [error, setError] = useState('');

  const router = useRouter();

  const setEmailMessage = useEmailMessage((state) => state.setMessage);

  const onSubmit = useCallback(async (data: FormFields) => {
    if (isSubmitting) return;
    const formData = new FormData();
    Object.keys(data).forEach((key, index) => {
      formData.set(key, Object.values(data)[index] as string);
    })
    try {
      console.log("keys", Object.keys(data));
      const response = await fetch("/api/auth/signup/developer", {
        method: "POST",
        body: formData,
      });
    
      const result = await response.json();
      console.log(response.status)
      if (response.status !== 200 && response.status !== 201)
        throw Error(result.message);
      const message = 'A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.'
      setEmailMessage(message)   
      router.push('/')

    } catch (error: any) {
      setError(error.message)
    }

  }, []);

  const onError = useCallback((error: FieldErrors<FormFields>) => {
    console.log(error);
  }, []);

  const hasError = useCallback(() => {
    return Object.keys(errors).some((key, index) => {
      return Object.values(errors)[index] !== null;
    });
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-3 items-start pt-5"
    >
      <div className="w-[90%]">
        <h2 className="text-lg text-gray-700 py-2">First Name</h2>
        <input
          type="text"
          className="input-border"
          {...register?.("firstname", {
            required: "First Name can not be empty",
            minLength: {
              value: 2,
              message: `First Name must be at least 2 characters long`,
            },
            maxLength: {
              value: 100,
              message: `First Name must be at most 100 characters long`,
            },
          })}
          onChange={()=>setError('')}
        />
        {errors?.["firstname"] && (
          <p className=" text-sm text-red-alert mt-2">
            {errors?.["email"]?.message}
          </p>
        )}
      </div>
      <div className="w-[90%]">
        <h2 className="text-lg text-gray-700 py-2">Last Name</h2>
        <input
          type="text"
          className="input-border"
          {...register?.("lastname", {
            required: "Last Name can not be empty",
            minLength: {
              value: 2,
              message: `Last Name must be at least 2 characters long`,
            },
            maxLength: {
              value: 100,
              message: `Last Name must be at most 100 characters long`,
            },
          })}
          onChange={()=>setError('')}
        />
        {errors?.["lastname"] && (
          <p className=" text-sm text-red-alert mt-2">
            {errors?.["email"]?.message}
          </p>
        )}
      </div>
      <div className="w-[90%]">
        <h2 className="text-lg text-gray-700 py-2">Email</h2>
        <input
          type="email"
          className="input-border"
          {...register?.("email", {
            required: "Email can not be empty",
            minLength: {
              value: 2,
              message: `Email must be at least 2 characters long`,
            },
            maxLength: {
              value: 100,
              message: `Email must be at most 100 characters long`,
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email.",
            },
          })}
          onChange={()=>setError('')}
        />
        {errors?.["email"] && (
          <p className=" text-sm text-red-alert mt-2">
            {errors?.["email"]?.message}
          </p>
        )}
      </div>
      <div className="w-[90%]">
        <h2 className="text-lg text-gray-700 py-2">Password</h2>
        <input
          autoComplete="off"
          type="password"
          className="input-border"
          {...register?.("password", {
            required: "Password can not be empty",
          })}
          onChange={()=>setError('')}
        />
        {errors?.["password"] && (
          <p className=" text-sm text-red-alert mt-2">
            {errors?.["email"]?.message}
          </p>
        )}
        {
          error && <p className=" text-sm text-red-alert mt-2">
          {error}
        </p>
        }
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center gap-4 w-[90%] h mt-6 text-center px-8 py-3 rounded-md text-white bg-deep-blue hover:bg-gray-900 font-normal text-lg"
      >
        <p>Sign Up</p>{isSubmitting && <Spinner />}
      </button>
      {isSubmitted && hasError() && (
        <p className=" text-sm text-red-alert mt-2">
          Please scroll up to fix the error fields before proceeding!
        </p>
      )}
      <h2 className="mt-10 w-[90%] text-lg text-center">
        Already have an account?{" "}
        <span className=" underline text-blue-600 hover:text-blue-700">
          <Link href="/signin">Sign In</Link>
        </span>
      </h2>
      <DevTool control={control} />
    </form>
  );
};

export default SignUpForm;
