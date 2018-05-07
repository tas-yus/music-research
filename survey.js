var mongoose = require("mongoose");

var SurveySchema = new mongoose.Schema({
    gender: Boolean,
    age: Number,
    images: [{
      image: String,
      value: Number,
      value2: Number,
      value3: Number
    }]
}, { emitIndexErrors: true });

module.exports = mongoose.model("Survey", SurveySchema);
