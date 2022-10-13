const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: { type: String },
    username: { type: String },
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    password: { type: String },
    address: { type: String },
    gender: { type: String },
  },
  {
    timestamps: [{ createdAt: "created_at", updatedAt: "updated_at" }],
  }
);

module.exports = mongoose.model("Product", productSchema);
