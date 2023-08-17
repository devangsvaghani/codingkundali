import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // validate email
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "User does not exist",
        },
        {
          status: 404,
        }
      );
    }

    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return NextResponse.json(
        {
          success: true,
          message: "User does not exist",
        },
        {
          status: 404,
        }
      );
    }

    const res = await User.deleteOne(userExist);

    return NextResponse.json(
      {
        success: true,
        message: "User Deleted Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
