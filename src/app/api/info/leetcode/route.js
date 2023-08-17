import fetchGraphQLData from "@/utils/fetchGraphQLData";
import { NextResponse } from "next/server";


const query = `
    query userProblemsSolved($username: String!) {
        matchedUser(username: $username) {
            submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                }
            }
        }
    }
`;

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

    const res = await fetchGraphQLData(query, {username});

    return NextResponse.json({
      success: true,
      data: res.data.matchedUser.submitStatsGlobal,
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