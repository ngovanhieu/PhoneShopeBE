
import mongoose from 'mongoose';
const {Schema} = mongoose;

const productsSchema = new Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    productBrand: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    chip: {
      type: String,
      require: true,
    },
    ram: {
      type: String,
      require: true,
    },
    memory: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    discount: {
      type: Number,
      require: false,
    },
    quantity: {
      type: Number,
      require: true,
    },
    images: {
      type: Object,
      require: true,
    },
  },

  { timestamps: true }
);

const Products = mongoose.model("products", productsSchema);
export default Products;
