import connect from "@/config/database";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();

export async function POST(req){
  try{
    const users = await User.find({}).select("name year leetcode");

    return NextResponse.json({
      success: true,
      users: users,
    }, {
      status: 200,
    })
  }
  catch(e){
    return NextResponse.json({
      success: false,
      messgae: "Internal Server Error"
    }, {
      status: 500,
    })
  }
}