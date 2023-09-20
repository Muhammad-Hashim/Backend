const express =require("express")
const {connection}=require('./Model/db');
const { userRouter } = require("./router/user.router");
const { notesRouter } = require("./router/notes.router");
// const cors = require("cors");

const app =express()
// app.use(cors)
app.use(express.json())
app.use("/user", userRouter);
app.use("/notes", notesRouter);


app.get("/",(req,res)=>{

    res.send([{
        hasim:"hashim"
    }])
}
)




 app.listen(3000,async()=>{
    try {
        await connection
        console.log("conection establish")
    } catch (error) {
         console.log(error)
    }   
    console.log("server is Runing .....................")

 })

