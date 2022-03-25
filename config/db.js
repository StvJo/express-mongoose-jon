const mongoose = require("mongoose");

// const uri = "mongodb://localhost:27018/school";

const uri =
  "mongodb+srv://stvjo:sjon10210221@cluster0.khpm6.mongodb.net/school?retryWrites=true&w=majority";

const db = mongoose.connect(uri);

module.exports = db;
