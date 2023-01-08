import mongoose from "mongoose";
const TextSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  expireAt: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },

});


export default mongoose.model("Text", TextSchema)