import mongoose from "mongoose";
const { Schema } = mongoose;

import * as validate from "../helpers/validation/color";

const colorSchema = Schema({
  color: {
    type: String,
    required: [true, "Please enter valid color"],
    validate: [validate.isValidColor, "Please enter valid color"],
  },
  __v: {
    type: Number,
    select: false,
  },
});

export default mongoose.model("Color", colorSchema);
