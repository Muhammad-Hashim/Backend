const mongoose = require("mongoose");

const notesModel = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, requird: true },
    user: { type: String,  },
  },
  {
    versionkey: false,
  }
);

const noteModel = mongoose.model("notes", notesModel);

module.exports = {
  noteModel,
};
