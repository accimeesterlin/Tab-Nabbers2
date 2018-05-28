const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = Schema({
  city: String,
  zipCode: Number,
  state: String,
  streetAddress: String
});

const CompanySchema = Schema({
  address: AddressSchema,

  company: {
    companyName: String,
    domainName: String
  },
  email: String,
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  jobTitle: String,

  requirements: [{
    summary: String,
    years_experience: Number,
    title: String,
    available: Boolean,
    technologies: [{
      type: String
    }],

    favorite_candidates: [{
      type: String
    }]
  }]

}, {
  timestamps: true
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;