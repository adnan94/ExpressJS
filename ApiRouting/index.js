const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("Hello from express");
});

app.get("/about",(req,res) => {
    res.send("Hello from express about");
});

app.listen(8001,()=>{
    console.log("Listening the port 8000")
})