import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,dropDups:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false}
    
},{
    timestamps:true//add 2 fields : created & updated at
})

const User = mongoose.model("User",userSchema)
export default User;

