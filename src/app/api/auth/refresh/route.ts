import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import DeveloperModel from "../../../model/developer";
import jwt, { JwtPayload } from "jsonwebtoken";
import connectDB from "../../../../../config/database";

// export interface JwtPayload {
//     _id: string;
//     firstname: string;
//     lastname: string;
//   }

export async function POST(req: NextRequest, res: NextResponse) {
  const refreshToken = cookies().get("jwt")?.value as unknown as string;

  if (!refreshToken)
    return NextResponse.json(
      { message: "Unauthorized Access." },
      {
        status: 401,
      }
    );

  cookies().delete("jwt");
  console.log("refreshToken", refreshToken);

  try {
    connectDB();
    const foundDeveloper = await DeveloperModel.findOne({
      refreshToken,
    }).exec();

    // Detected refresh token reuse!
    if (!foundDeveloper) {
      await jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET as string,
        async (err, decoded: any) => {
          if (err)
            return NextResponse.json(
              { message: "Valid token, Forbidden Access." },
              {
                status: 401,
              }
            );
          console.log("attempted refresh token reuse!");
          const hackedUser = await DeveloperModel.findOne({
            _id: decoded?._id as string,
          }).exec();
          hackedUser.refreshToken = [];
          const result = await hackedUser.save();
          console.log(result);
        }
      );
      return NextResponse.json(
        { message: "No Refresh Token, Forbidden Access." },
        {
          status: 403,
        }
      );
    }

    const newRefreshTokenArray = foundDeveloper.refreshToken.filter(
      (rt: string) => rt !== refreshToken
    );

    console.log("foundDeveloper", foundDeveloper);

    let status = 200;
    let message = "";
    let accessToken;
    // evaluate jwt
    await jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string,
      async (err, decoded: any) => {
        if (err) {
          console.log("expired refresh token");
          foundDeveloper.refreshToken = [...newRefreshTokenArray];
          const result = await foundDeveloper.save();
          console.log(result);
        }

        console.log("decoded", decoded);
        if (err || foundDeveloper._id.toString() !== decoded._id) {
          message = "Forbidden Access";
          status = 403;
          return;
          // return NextResponse.json(
          //   { message: "Forbidden Access." },
          //   {
          //     status: 403,
          //   }
          // );
        }

        // Refresh token was still valid
        accessToken = jwt.sign(
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
        // Saving refreshToken with current user
        foundDeveloper.refreshToken = [
          ...newRefreshTokenArray,
          newRefreshToken,
        ];
        const result = await foundDeveloper.save();
        console.log("result", result);

        // Creates Secure Cookie with refresh token
        cookies().set("jwt", newRefreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 24 * 60 * 60 * 1000,
        });

        status = 201;

        // return NextResponse.json(
        //   { accessToken },
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     status: 201,
        //   }
        // );
      }
    );

    return NextResponse.json(
      { accessToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: status,
      }
    );
  } catch (err: any) {
    console.log("error msg", err.message);
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
