import gfgHelper from "@/utils/gfgHelper";
import { NextResponse } from "next/server";

export async function POST(req){
  try{
    const {username} = await req.json();

    if(!username){
      return NextResponse.json({
        success: false,
        message: "Not Found",
      }, {
        status: 404,
      })
    }

    const url = `${process.env.GEEKSFORGEEKS_URL}${username}/practice`;
    
    const options = {
      method: "GET",
    };

    const res = await gfgHelper(url, options);

    return NextResponse.json({
      success: true,
      data: res,
    }, {
      status: 200,
    })
  }
  catch(e){
    return NextResponse.json({
      success: false,
      message: "Can't fetch data",
    }, {
      status: 500,
    })
  }
}