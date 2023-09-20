const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://muhammadhashimsardar:0ZPht1gvQnAiazY1@cluster0.fapwmzq.mongodb.net/note-app?retryWrites=true&w=majority";


const connection = mongoose.connect(uri);



module.exports={
  connection,
};