const express = require("express");
const app = express();


app.get("/", (req,res) =>{
    res.send("server.js connected")
})


const PORT = 8000 || process.env.PORT

app.listen(8000, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})