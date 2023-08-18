import connect from "@/config/database";
import User from "@/models/User";

export const fetchUser = async (leetcode) => {
  try{
    await connect();
    const user = await User.findOne({leetcode: leetcode});
    
    return user;

  }catch(e){
    return null;
  }
}