import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

userName:{
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
        default:"https://pixabay.com/images/download/x-973460_1920.png"
    },
bio:{
        type: String,
        default:""
    },
Location:{
    type:String,
    default:""
}

},{timestamps:true})

const User = mongoose.model('User', userSchema)

export default User;