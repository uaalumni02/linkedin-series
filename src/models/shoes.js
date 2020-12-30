import mongoose from "mongoose";
const { Schema } = mongoose;

const ShoeSchema = Schema({
  shoe: {
    type: String,
    required: true,
  },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Shoe", ShoeSchema);
