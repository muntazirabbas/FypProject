const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  clubId: { type: mongoose.Schema.Types.ObjectId, ref: 'Club' },
  coachAssigned: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  coachStatus: { type: Boolean, default: false },
  name: { type: String },
  athletes: [
    {
      athleteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete' }
    }
  ],
  city: { type: String },
  phoneNumber: { type: String }
});

module.exports = mongoose.model('Team', teamSchema);
