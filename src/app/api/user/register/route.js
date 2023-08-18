import { NextResponse } from "next/server";
import User from "@/models/User";
import connect from "@/config/database";



export async function POST(req){
  try{
    const {name, email, year, leetcode, codingninjas, geeksforgeeks} = await req.json();

    // validate credentials
    if(!name || !email || !year || !leetcode || !codingninjas || !geeksforgeeks){
      return NextResponse.json({
        success: false,
        message: "Not Found",
      },{
        status: 404,
      })
    }

    await connect();
    // check if user already exist
    const existingUser = await User.findOne({email: email});
    if(existingUser){
      return NextResponse.json({
        success: false,
        message: "User already exists",
      },{
        status: 404,
      })
    }
    
    // create user in db
    const res = await User.create({
      name: name,
      email: email,
      avatar: "",
      year: year,
      leetcode: leetcode,
      codingninjas: codingninjas,
      geeksforgeeks: geeksforgeeks,
    });

    return NextResponse.json({
      success: true,
      message: "User Created Successfully",
    }, {
      status: 200,
    })
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