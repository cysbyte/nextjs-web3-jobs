'use server';

import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import DeveloperModel from "../../../model/developer";
import { cookies, headers } from "next/headers";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const firstname = formData.get('firstname') as string;
  const lastname = formData.get('lastname') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!firstname)
    return NextResponse.json(
      { message: "First Name is required." },
      {
        status: 400,
      }
    );
  if (!lastname)
    return NextResponse.json(
      { message: "Last Name is required." },
      {
        status: 400,
      }
    );
  if (!email)
    return NextResponse.json(
      { message: "Email is required." },
      {
        status: 400,
      }
    );
  if (!password)
    return NextResponse.json(
      { message: "Password is required." },
      {
        status: 400,
      }
    );

  try {
    await connectDB();

    // check for duplicate usernames in the db
    const duplicate = await DeveloperModel.findOne({ email: email }).exec();
    if (duplicate)
      return new Response(
        JSON.stringify({ message: "This account is already exists" }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          status: 409,
        }
      ); //Conflict

    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new developer
    const result = await DeveloperModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPwd,
    });

    console.log(result);

    return NextResponse.json(
      { message: `Your account has been created!` },
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 201,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "Database opration error" },
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
}
