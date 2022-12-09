const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not exceed 50 characters'],
  },
  slug: String,
  descreption: {
    type: String,
    required: [false, 'Please enter a description'],
    maxlength: [500, 'Description can not exceed 500 characters'],
  },
  website: {
    type: String,

    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      '',
    ],
  },
  phone: {
    required: false,
    type: String,
    maxlength: [20, 'Please enter valid phone number'],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email address',
    ],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    type: String,
    // {
    //   type: String,
    //   enum: ['point'],
    //   required: true,
    // }
    coordinates: {
      type: [Number],
      required: false,
      index: '2dsphere',
    },
    formatttedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
    ],
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating cant be more than 10'],
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating cant be more than 10'],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg ',
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Bootcamp', BootcampSchema);
