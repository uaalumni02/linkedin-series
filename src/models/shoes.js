import mongoose from "mongoose";
const { Schema } = mongoose;

const ShoeSchema = Schema({
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  color: {
    type: Schema.Types.ObjectId,
    ref: "Color",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Shoe", ShoeSchema);
