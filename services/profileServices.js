import { findUserById, findUserByIdAndUpdate } from "../repositories/userRepo.js"
import bcrypt, { hash } from 'bcrypt'


export const getUserProfile = async(userId) =>{
    const user = await findUserById(userId)

    if(!user){
        throw new Error("User not found")
    }
console.log("profile service:", user);
    return user
}

export const updateUserProfile = async(userId, updates)=>{
    const allowedUpdates={}
    if(updates.userName) allowedUpdates.userName = updates.userName
    if(updates.profileImage) allowedUpdates.profileImage= updates.profileImage
    if(updates.bio) allowedUpdates.bio= updates.bio
    if(updates.gender) allowedUpdates.gender= updates.gender
    if(updates.location) allowedUpdates.location= updates.location

    const updatedUser = await findUserByIdAndUpdate(userId, allowedUpdates)

        if(!updatedUser){
        throw new Error("user not found");
        
    }

    return updatedUser


}

export const changeUserPassword = async(userId, oldPassword, newPassword)=>{

    const user = await findUserByIdWithPassword(userId)

    if(!user){
        throw new Error("User not found")
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password)

    if(!isMatch){
        throw new Error("Old password incorrect")
    }

    const hashedPassword = await bcrypt.hash(newPassword,10)

    const updatedUser = await findUserByIdAndUpdate(userId, {password: hashedPassword})

    return updatedUser;
}