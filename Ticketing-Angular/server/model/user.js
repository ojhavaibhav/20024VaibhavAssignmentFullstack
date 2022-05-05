import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    password: String

})

const userModel = mongoose.model('userCollection',userSchema)

export default userModel;