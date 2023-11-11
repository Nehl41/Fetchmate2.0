const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Blog Must Have A Title"],
    },
    content: {
      type: String,
      required: [true, "Enter Blog Content"],
      min: [20, "Blog Must Have Alteast 20 Characters"],
      max: [100, "Blog Can Have Maximum Of 100 charcters"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Blog", blogSchema);
