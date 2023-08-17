import connect from "@/config/database";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();

export async function POST(req){
  try{
    const {leetcode} = await req.json();

    

    const user = await User.findOne({leetcode: leetcode});
    
    if(!user){
      return NextResponse.json({
        success: false,
        message: "User can not Found",
      }, {
        status: 404,
      })
    }

    return NextResponse.json({
      success: true,
      user: user,
    }, {
      status: 200,
    })
  }catch(e){
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    }, {
      status: 500,
    })
  }
}