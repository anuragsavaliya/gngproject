const mongoose=require("mongoose");
const validator=require("validator");



const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unuque:[true,"Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("imvalid email")
            }
        }
    },
    phone:{
        type:Number,
        min :10,
        required:true,
        unique:true
    }
})


const Student=new mongoose.model("Student",studentSchema);
module.exports=Student;