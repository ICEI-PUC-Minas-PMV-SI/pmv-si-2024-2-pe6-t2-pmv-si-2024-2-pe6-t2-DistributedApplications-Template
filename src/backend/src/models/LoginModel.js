// models/userModel.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Método para comparar a senha
userSchema.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Pré-save para criptografar a senha antes de salvar no banco de dados
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

module.exports = mongoose.model("User", userSchema);
