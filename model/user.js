import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

name:{
    type:string,
    required:true
},
    email:{
        type:String,
        required: true
    },

    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['female','male','prefer not say',null],
        default:null
    },
    profileImage:{
        type:String,
        default:"/profile_img.webp"
    },
    bio:{
        type: String,
        default:""
    }

},{timestamps:true})

const User = mongoose.model('User', userSchema)

export default User;