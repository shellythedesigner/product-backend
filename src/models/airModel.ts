import { Schema, model } from "mongoose";

const airSchema = new Schema({
  productName: {
    type: String,
    required: [true, "Name text required!"],
    maxlength: 50,
  },
  brief: {
    type: String,
    required: [true, "Brief text required!"],
    // maxlength: 50,
  },
  price: {
    type: Number,
    required: [true, "Price text required!"],
    maxlength: 20,
  },
  description: {
    type: String,
    required: [true, "Description text required!"],
    // maxlength: 100,
  },
  imageUrl: {
    type: String,
    required: [true, "File text required!"],
    // maxlength: 50,
  },
});

export default model("air", airSchema);

