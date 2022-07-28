const mongoose = require("mongoose");

let personSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: "number" },
  favoriteFoods: [String],
});

exports.Person = mongoose.model("person", personSchema);