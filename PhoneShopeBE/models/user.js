import mongoose from 'mongoose';
const {Schema} = mongoose;
const UserSchema = new Schema({
    firstName : {
        type : String , 
        required : true , 
        minlenght : 2 
    }, 
    lastName : {
        type : String , 
        required : true , 
        minlenght : 2 
    }, 
    password : {type : String , required : true},
    email : {type : String , required : true , unique : true},
    isAdmin : {
        type : Boolean , 
        default : false, 
    },
    
},{timestamps: true});
const User = mongoose.model('User', UserSchema);
export default User;