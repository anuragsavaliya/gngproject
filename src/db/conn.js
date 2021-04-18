const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/GNG",{
useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
console.log("connection secces");
}).catch((e)=>{
console.log(e);
});