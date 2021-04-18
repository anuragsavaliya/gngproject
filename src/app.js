const express=require("express");
const Student = require("./models/student");
require("./db/conn")
const app=express();
app.use(express.json())
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
res.send("hello yeeh ");
});

app.post("/add",(req,res)=>{
console.log(req.body);
const user =new Student(req.body);
user.save().then(()=>{
    res.status(200).send(user);
}).catch((e)=>{
res.status(401).send(e);
})
});

app.listen(port,()=>{
console.log("server started");
});