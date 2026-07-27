import mongoose from "mongoose";
// import profileImage from "../assets/profile_img.webp"
const userSchema = new mongoose.Schema({

name:{
    type:String,
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
        default:"../assets/profile_img.webp"
    },
bio:{
        type: String,
        default:""
    }

},{timestamps:true})

const User = mongoose.model('User', userSchema)

export default User;