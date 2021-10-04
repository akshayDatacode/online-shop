const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
  },
  {
    timestamps: [{ createdAt: "created_at", updatedAt: "updated_at" }],
  }
);

module.exports = mongoose.model("Product", productSchema);
