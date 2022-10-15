const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: { type: String },
    username: { type: String },
    userType: { type: String }, // customer, admin, store owner, manager, delivery
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

module.exports = mongoose.model("User", userSchema);
