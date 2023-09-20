const express = require("express");
const notesRouter = express.Router();
const { noteModel } = require("../Model/note");
const { authencatoer } = require("../Middleware/authencator");
const app = express();
// notesRouter.use(authencatoer);


notesRouter.get('/', async(req,res)=>{
       const data = await noteModel.find();

    res.json(data);
    })
notesRouter.post("/create", (req, res) => {
  const { title, description,  } = req.body;
  const newNote = new noteModel({
    title,
    description,
    user:userId._id
  });
  newNote
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });

});

module.exports = {
  notesRouter,
};
