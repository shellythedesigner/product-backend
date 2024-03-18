import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Title text required!"],
    maxlength: 50,
  },
});

export default model("User", userSchema);