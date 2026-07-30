import bcrypt from 'bcrypt'
import { createUser, findUserByEmail, findUserById,findUserByIdAndUpdate } from '../repositories/userRepo.js'
import jwt from 'jsonwebtoken'



// export const signupUser = async({userName, email, password})=>{

//   const existingUser = await findUserByEmail(email)

//     if(existingUser){
//         throw new Error("User already exists")
//     }

//     const hashedPassword = await bcrypt.hash(password, 10)

//     const newUser = await createUser({userName, email, password: hashedPassword})

//     return {userId: newUser._id, userName:newUser.userName, email: newUser.email}

//}
export const signupUser = async ({ userName, email, password }) => {

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser({
    userName,
    email,
    password: hashedPassword,
    profileImage: `https://api.dicebear.com/10.x/initials/svg?seed=${encodeURIComponent(userName)}`
  });

  return {
    userId: newUser._id,
    userName: newUser.userName,
    email: newUser.email,
    profileImage: newUser.profileImage
  };
};

export const loginUser = async({email, password}) =>{
    const user = await findUserByEmail(email)

    if(!user){

        throw new Error("Invalid email or password")
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){

        throw new Error("Invalid email or password")
    }

    const token = await jwt.sign(
        {userId: user._id},
         process.env.JWT_SECRET,
         {expiresIn: '24h'}
        )
        console.log("LOGIN USER =>    hjbg vjvgj ghv jgv", user);

    return {token, user:{
        userId: user._id,
        userEmail: user.email,
        userName: user.userName,
        profileImage: user.profileImage,
        bio:user.bio,
        location:user.location
    } }
}