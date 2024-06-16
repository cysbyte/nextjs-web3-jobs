"use client";

import { DevTool } from "@hookform/devtools";
import Link from "next/link";
import React, { useCallback } from "react";
import { FieldErrors, useForm } from "react-hook-form";

const SignInForm = () => {
  type FormFields = {
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

  const onSubmit = useCallback(async (data: FormFields) => {
    if (isSubmitting) return;
    console.log(data);
    // setStep('preview');
    const formData = new FormData();
    Object.keys(data).forEach((key, index) =>
      formData.set(key, Object.values(data)[index] as string)
    );
    // const job = await submitSignin(formData);
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
            }
          })}
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
            minLength: {
              value: 2,
              message: `First Name must be at least 2 characters long`,
            },
            maxLength: {
              value: 100,
              message: `Fist Name must be at most 100 characters long`,
            },
            validate: (p) => {
              if (p.length < 8) {
                return "Your password must be at least 8 characters";
              }
              if (p.search(/[a-z]/i) < 0) {
                return "Your password must contain at least one letter.";
              }
              if (p.search(/[0-9]/) < 0) {
                return "Your password must contain at least one digit.";
              }
            },
          })}
        />
        {errors?.["password"] && (
          <p className=" text-sm text-red-alert mt-2">
            {errors?.["password"]?.message}
          </p>
        )}
      </div>
      <button className="w-[90%] mt-6 text-center px-8 py-3 rounded-md text-white bg-deep-blue font-normal text-lg">
        Sign In
      </button>
      <h2 className="mt-10 w-[90%] text-lg text-center">
        Already have an account?{" "}
        <span className=" underline text-blue-600 hover:text-blue-700">
          <Link href="/signup">Sign Up</Link>
        </span>
      </h2>
      <DevTool control={control} />
    </form>
  );
};

export default SignInForm;
