"use server";

import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import cookie from "cookie";
import DeveloperModel from "../../../../../model/developer";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  console.log(`cookie available at login: ${JSON.stringify(req.cookies)}`);

  if (!email || !password)
    return NextResponse.json(
      { message: "Email and password are required." },
      {
        status: 400,
      }
    );

  try {
    // refreshToken is put in cookies by default
    let refreshToken = cookies().get("jwt")?.value;

    await connectDB();

    const foundDeveloper = await DeveloperModel.findOne({
      email: email,
    }).exec();

    if (!foundDeveloper)
      return NextResponse.json(
        {
          message: "Account does not exists, please login or create an account",
        },
        {
          status: 401,
        }
      );
    // evaluate password
    const match = await bcrypt.compare(password, foundDeveloper.password);
    if (!match) {
      return NextResponse.json(
        { message: "Incorrect email or password" },
        {
          status: 401,
        }
      );
    }

    // create JWTs
    const accessToken = jwt.sign(
      {
        _id: foundDeveloper._id,
        email: foundDeveloper.email,
        firstname: foundDeveloper.firstname,
        lastname: foundDeveloper.lastname,
      },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "10s" }
    );
    const newRefreshToken = jwt.sign(
      { _id: foundDeveloper._id },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "90d" }
    );

    let newRefreshTokenArray = !refreshToken
      ? foundDeveloper.refreshToken
      : foundDeveloper.refreshToken.filter(
          (rt: string | undefined) => rt !== refreshToken
        );

    if (!refreshToken) {
      refreshToken = foundDeveloper.refreshToken;
    } else {
      /* 
              Scenario added here: 
                  1) User logs in but never uses RT and does not logout 
                  2) RT is stolen
                  3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
              */
      const foundToken = await DeveloperModel.findOne({ refreshToken }).exec();

      console.log('foundToken', foundToken)

      // Detected refresh token reuse!
      if (!foundToken) {
        console.log("attempted refresh token reuse at login!");
        // clear out ALL previous refresh tokens
        newRefreshTokenArray = [];
      }

      cookies().delete("jwt");
    }

    // Saving refreshToken with current user
    foundDeveloper.refreshToken = [...newRefreshTokenArray, newRefreshToken];

    const result = await foundDeveloper.save();
    console.log(result);

    // Creates Secure Cookie with refresh token
    cookies().set("jwt", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });
    // Send authorization roles and access token to user
    return NextResponse.json(
      { accessToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 201,
      }
    );
  } catch (err: any) {
    console.log(err.message);
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
