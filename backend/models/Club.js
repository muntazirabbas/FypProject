const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  country: { type: String },
  city: { type: String },
  phoneNumber: { type: String },
  approved: { type: Boolean, deafult: false }
});

module.exports = mongoose.model('Club', clubSchema);
