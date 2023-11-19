const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExpertSchema = new Schema({

  //define your schema
    id: String,
    firstName: String,
    lastName: String,
    expertise: String,
    experienceYears: String,
    contactEmail: String,
    contactPhone: String,
    locationCity: String,
    locationState: String,
    locationCountry: String,
},
  { timestamps: true });
// Export model
module.exports = mongoose.model("experts", ExpertSchema);
