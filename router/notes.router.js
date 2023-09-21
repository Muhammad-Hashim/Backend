const express = require("express");
const notesRouter = express.Router();
const { noteModel } = require("../Model/note");
const { authencatoer } = require("../Middleware/authencator");
const app = express();
// notesRouter.use(authencatoer); 

notesRouter.get("/", async (req, res) => {

   const token = req.headers.authorization;
  const data = await noteModel.find();
  res.json(data);
});

notesRouter.post("/create", (req, res) => {

  const { title, body } = req.body;
  const newNote = new noteModel({
    title,
    body,
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


notesRouter.patch("/",async (req,res) => {
    let {_id}=req.headers 
    try {
          const updatedNote =await noteModel.findByIdAndUpdate(_id,req.body)
          
          res.send("updated",)
          updatedNote.save()
    } catch (error) {
      res.send(error)
    }

})
notesRouter.delete("/", async (req, res) => {
  let { id } = req.headers

  try {
    const delteNotes=await noteModel.findOneAndDelete(id ,);
    res.send("delete");
  } catch (error) {
    res.send(error);
  }
});


module.exports = {
  notesRouter,
};
