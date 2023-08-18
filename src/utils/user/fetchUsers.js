import connect from "@/config/database";
import User from "@/models/User";

export const fetchUsers = async () => {
  try{
    await connect();
    const users = await User.find({}).select("name year leetcode");

    return users;
  }
  catch(e){
    return null;
  }
}