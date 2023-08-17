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

    
    let today = new Date();
    const date = today.toISOString().split('T')[0];
    const url = `${process.env.CODINGNINJAS_URL}?uuid=${username}&end_date=${date}&start_date=${date}&is_stats_required=true`;
    const options = {
      method: "GET",
    };

    const responce = await fetch(url, options);
    const res = await responce.json();
    
    return NextResponse.json({
      success: true,
      data: res.data,
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