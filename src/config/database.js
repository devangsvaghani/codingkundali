import mongoose from "mongoose";

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection successfully");
  }
  catch(e){
    console.log("Database not connected");
    throw new Error(e);
  }
}

export default connect;