import {Products}  from "../models/index.js";

const carControllers = {
    // [Get]/phone
    index : async (req, res, next) => {
        try {
            const Product = await Products.find({})
            res.status(200).json(Product);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    // [Get]/phone/create
    create : async (req, res, next) => {
        try {
            const newPhone = await Products.create(req.body);
            const savePhone = await newPhone.save();
            res.status(201).json(savePhone);
        } catch (error) {
            res.status(422).json(error.message);
        }
    },
    // [Get]/phone/search
    search : async (req, res, next) => {
        try {
            const searchQuery = new RegExp(`${req.query.q}`, 'i')
            const Phones = await Products.find({ productName : { $regex : searchQuery}})
            res.status(201).json(Phones);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    // [Get]/phone/:id
    show : async (req, res, next) => {
        try {
            const Phone = await Products.findOne({_id:req.params.id})
            res.status(200).json(Phone);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    // [delete]/phone/:id
    delete : async (req, res, next) => {
        try {
            await Products.findByIdAndDelete({_id:req.params.id});
            res.status(201).json("Delete successfully");
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    //// [update]phone/:id/edit
    update : async (req, res, next) => {
        try {
           const updatePhone =  await Products.findOneAndUpdate({_id:req.params.id},req.body,{
                new: true
              });
            res.status(201).json(updatePhone);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
}
export default carControllers;
