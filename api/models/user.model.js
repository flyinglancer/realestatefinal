import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://i.pinimg.com/originals/6a/9f/c2/6a9fc2755d3766df06e0702fd6ac9672.jpg"
    },
    
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;