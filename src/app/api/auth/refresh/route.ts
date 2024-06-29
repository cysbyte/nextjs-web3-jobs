import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import DeveloperModel from "../../../../../model/developer";
import jwt, { JwtPayload } from "jsonwebtoken";

// export interface JwtPayload {
//     _id: string;
//     firstname: string;
//     lastname: string;
//   }

export async function POST(req: NextRequest, res: NextResponse) {
  if (!cookies().get("jwt"))
    return NextResponse.json(
      { message: "Unauthorized Access." },
      {
        status: 401,
      }
    );
  const refreshToken = cookies().get("jwt") as unknown as string;
  cookies().delete("jwt");

  const foundDeveloper = await DeveloperModel.findOne({ refreshToken }).exec();

  // Detected refresh token reuse!
  if (!foundDeveloper) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string,
      async (err, decoded: any) => {
        if (err)
          return NextResponse.json(
            { message: "Forbidden Access." },
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
      { message: "Forbidden Access." },
      {
        status: 403,
      }
    );
  }

  const newRefreshTokenArray = foundDeveloper.refreshToken.filter(
    (rt: string) => rt !== refreshToken
  );

  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET as string,
    async (err, decoded: any) => {
      if (err) {
        console.log("expired refresh token");
        foundDeveloper.refreshToken = [...newRefreshTokenArray];
        const result = await foundDeveloper.save();
        console.log(result);
      }
      if (err || foundDeveloper._id !== decoded._id)
        return NextResponse.json(
          { message: "Forbidden Access." },
          {
            status: 403,
          }
        );

      // Refresh token was still valid
      const accessToken = jwt.sign(
        {
          _id: foundDeveloper._id,
          firstname: foundDeveloper.firstname,
          lastname: foundDeveloper.lastname,
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: "10s" }
      );

      const newRefreshToken = jwt.sign(
        { _id: foundDeveloper._id },
        process.env.REFRESH_TOKEN_SECRET as string,
        { expiresIn: "1d" }
      );
      // Saving refreshToken with current user
      foundDeveloper.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await foundDeveloper.save();

      // Creates Secure Cookie with refresh token
      cookies().set("jwt", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      });

      NextResponse.json({ accessToken }, {
        headers: {
          "Content-Type": "application/json",
        },
        status: 201,
      });
    }
  );
}
