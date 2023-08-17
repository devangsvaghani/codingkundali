
const URL = process.env.LEETCODE_URL;


const fetchGraphQLData = async (query, variables) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchGraphQLData;