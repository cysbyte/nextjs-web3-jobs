"use server";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import DeveloperModel from "../../../../../model/developer";

export async function POST(req: NextRequest, res: NextResponse) {
  // On client, also delete the accessToken

  try {
    const refreshToken = cookies().get("jwt")?.value;
    // console.log('refreshToken', cookies().getAll())
    if (!refreshToken)
      return new Response(JSON.stringify({ message: "Already logout" }), {
        status: 200,
      });

    await connectDB()
    // Is refreshToken in db?
    const foundDeveloper = await DeveloperModel.findOne({
      refreshToken,
    }).exec();
    if (!foundDeveloper) {
      cookies().delete("jwt");
      return NextResponse.json({ message: "Already logout" }, {
        status: 200,
      });
    }

    // Delete refreshToken in db
    foundDeveloper.refreshToken = foundDeveloper.refreshToken.filter(
      (rt: string) => rt !== refreshToken
    );
    const result = await foundDeveloper.save();
    console.log(result);

    cookies().delete("jwt");
    return NextResponse.json({ message: "Already logout" }, {
      status: 200,
    });
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
