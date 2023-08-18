import gfgHelper from "@/utils/gfgHelper";

export const fetchGfgData = async (username) => {
  try{

    const url = `${process.env.GEEKSFORGEEKS_URL}${username}/practice`;
    
    const options = {
      method: "GET",
    };

    const res = await gfgHelper(url, options);

    return res;
  }
  catch(e){
    return null;
  }
}