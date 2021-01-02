import mongoose from "mongoose";
const { Schema } = mongoose;

const colorSchema = Schema({
  color: {
    type: String,
    required: true,
  },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Color", colorSchema);