import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name : {
    type : String,
    minLength : 3,
    maxLength : 50,
    required: true,
  },
  email: {
    type : String,
    required : true,
    unique : true,
  },
  avatar:{
    type: String,
  },
  year: {
    type: String,
    required: true,
  },
  leetcode: {
    type: String,
    required: true,
    unique: true,
  },
  codingninjas: {
    type: String, 
    required: true,
    unique: true,
  },
  geeksforgeeks: {
    type: String,
    required: true,
    unique: true,
  }

});

export default mongoose.models?.User || mongoose.model("User", userSchema);