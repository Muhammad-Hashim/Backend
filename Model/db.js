const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const collactionkEY=process.env.MONGO_KEY
const uri =
  `mongodb+srv://muhammadhashimsardar:${collactionkEY}.fapwmzq.mongodb.net/note-app?retryWrites=true&w=majority`;


const connection = mongoose.connect(uri);



module.exports={
  connection,
};