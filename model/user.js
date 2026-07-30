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
        default:"https://api.dicebear.com/10.x/initials/svg?seed=User"
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