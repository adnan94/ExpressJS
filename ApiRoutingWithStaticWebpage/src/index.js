const express = require("express");
const path = require("path");
const app = express();
const PORT = 8002;

const staticPath = path.join(__dirname,"../public");
console.log(staticPath);

//builtin middle ware 
app.use(express.static(staticPath));


app.get("/",(req,res) => {
    res.send("Hello from express");
});

app.get("/about",(req,res) => {
    res.status(200).send("Hello from express about");
});

app.listen(PORT,()=>{
    console.log(`Listening the port ${PORT}`);
});