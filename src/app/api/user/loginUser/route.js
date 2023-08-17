import connect from "@/config/database";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();

export async function POST(req){
  try{
    const {email, image} = await req.json();

    if(!email){
      return NextResponse.json({
        success: false,
        message: "Not Found",
      }, {
        status: 404,
      })
    }

    const user = await User.findOne({email : email});

    if(user){

      user.avatar = image;
      await user.save();

      return NextResponse.json({
        success: true,
        user: user,
      }, {
        status: 200,
      })
    }

  }
  catch(e){
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    }, {
      status: 500,
    })
  }
}