import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/job") {
    return NextResponse.rewrite(new URL("/jobs", request.url));
  }

  const loggedInRoutes = ["/accounts"];
  if (!loggedInRoutes.some((path) => request.nextUrl.pathname.startsWith(path)))
    return NextResponse.next();

  const authHeader =
    headers().get("authorization") || headers().get("Authorization");
  console.log(authHeader);
  if (!authHeader)
    return NextResponse.json(
      { message: "Unauthorized Access." },
      {
        status: 401,
      }
    );
  const token = authHeader.split("Bearer ")[1];

  await jwt.verify(token, process.env.ACCESS_SECRET_KEY as string, (err, decoded) => {
    if (err) {
      return NextResponse.json(
        { message: "Forbidden: JWT token expired!" },
        {
          status: 403,
        }
      );
    }
  });

  return NextResponse.next();
}
