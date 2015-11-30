var mongoose = require('mongoose');

var DaySchema = new mongoose.Schema({
  number: Number,
  hotel: { type: mongoose.type.Schema.Types.ObjectId, ref: "Hotel" },
  restaurants: [{ type: mongoose.type.Schema.Types.ObjectId, ref: "Restaurant"}],
  activities: [{ type: mongoose.type.Schema.Types.ObjectId, ref: "Activity"}]
}); 