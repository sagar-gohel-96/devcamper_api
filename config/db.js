const mongoose = require('mongoose');
const connectDB = async () => {
  const connect = await mongoose.connect(
    'mongodb+srv://sagar:sagar1101G@cluster0.4lslk6m.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
module.exports = connectDB;
