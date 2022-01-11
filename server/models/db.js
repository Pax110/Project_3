const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/culinary-collective";
mongoose.connect(`Connected to: ${dbUrl}`);

module.exports = mongoose;
