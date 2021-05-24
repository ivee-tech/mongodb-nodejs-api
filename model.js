const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let form = new Schema(
  {
      Id: { type: String },
      Name: { type: String }
  },
  { collection: "forms" }
);

module.exports = mongoose.model("forms", form);