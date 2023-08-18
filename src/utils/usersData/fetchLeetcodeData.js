import fetchGraphQLData from "../fetchGraphQLData";

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

export const fetchLeetcodeData = async (username) => {
  try{

    const res = await fetchGraphQLData(query, {username});

    return res.data.matchedUser.submitStatsGlobal;
  }
  catch(e){
    return null;
  }
}