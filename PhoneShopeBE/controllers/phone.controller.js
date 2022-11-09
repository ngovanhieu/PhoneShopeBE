import { Products } from "../models/index.js";

const carControllers = {
  index: async (req, res, next) => {
    try {
      const PAGE_SIZE = 12;
      var page = req.query.page;
      if (page) {
        page = parseInt(page);
        var skip = (page - 1) * PAGE_SIZE;
        const Product = await Products.find({}).skip(skip).limit(PAGE_SIZE);
        const totalProduct = await Products.find({})
        const total = Math.round( totalProduct.length / PAGE_SIZE )
        res.status(200).json({Product, total, totalProduct});
      } else {
        const Product = await Products.find({});
        const total = Math.round( Product.length / PAGE_SIZE )
        res.status(200).json({Product, total});
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  // [Get]/phone/create
  create: async (req, res, next) => {
    try {
      const newPhone = await Products.create(req.body);
      const savePhone = await newPhone.save();
      res.status(201).json(savePhone);
    } catch (error) {
      res.status(422).json(error.message);
    }
  },
  // [Get]/phone/search
  search: async (req, res, next) => {
    try {
      const searchQuery = new RegExp(`${req.query.q}`, "i");
      const Phones = await Products.find({
        productName: { $regex: searchQuery },
      });
      res.status(201).json(Phones);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  // [Get]/phone/:id
  show: async (req, res, next) => {
    try {
      const Phone = await Products.findOne({ _id: req.params.id });
      res.status(200).json(Phone);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  // [delete]/phone/:id
  delete: async (req, res, next) => {
    try {
      await Products.findByIdAndDelete({ _id: req.params.id });
      res.status(201).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  //// [update]phone/:id/edit
  update: async (req, res, next) => {
    try {
      const updatePhone = await Products.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );
      res.status(201).json(updatePhone);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};
export default carControllers;
