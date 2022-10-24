import { User } from "../models/index.js";

const refreshTokens = [];
const authControllers = {
    register : async (req, res, next) => {
        try {
            const user = await User.create(req.body);
            const saveUser = await user.save();
            return res.status(200).json(saveUser);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    //[Post] /auth/login
    login : async(req, res, next) => {
        try {
            const user = await User.findOne({email: req.body.email});
            if(!user){
                return res.status(404).json("wrong email");
            };
            const validPassword = req.body.password ===user.password;
            if(!validPassword){
               return res.status(404).json("password is incorrect");
            }
            if(validPassword && user){
                return res.status(200).json(user);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //Log Out
    logout : (req , res)=>{
        try {
            res.clearCookie("refreshToken");
            refreshTokens.filter(token=> token != req.cookies.refreshToken);
            res.status(200).json("Logged out successfully")
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    // [delete]/auth/:id
    delete : async (req, res, next) => {
        try {
            await User.findByIdAndDelete({_id:req.params.id});
            res.status(201).json("Delete successfully");
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    //// [update]auth/:id/edit
    update : async (req, res, next) => {
        try {
            //validate password and encryption
            if(req.body.password){
                const user = await User.findById(req.params.id);
                const validPassword = req.body.password ===user.password;
                if(!validPassword){
                    return res.status(404).json("password is incorrect");
                }
                req.body.password = req.body.newPassword;
            }
            const updateUser =  await User.findOneAndUpdate({_id:req.params.id},req.body,{
                new: true
            });
            res.status(201).json(updateUser);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
}
export default authControllers;
