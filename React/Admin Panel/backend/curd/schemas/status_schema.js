const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: String, default: 'Active' },  // Status field to track user status
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
