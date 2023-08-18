import connect from "@/config/database";
import User from "@/models/User";
import { cookies } from "next/headers";


export const loginUser = async ({email, image}) => {

  const cookieStore = cookies();
  const theme = cookieStore.get("theme")

  try {
    await connect();
    const user = await User.findOne({ email: email });
    
    if (!user) {
      return false;
    }

    user.avatar = image;
    await user.save();

    return true;
  } catch (e) {
    return false;
  }
}