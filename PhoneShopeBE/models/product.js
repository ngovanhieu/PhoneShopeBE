
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

    info: {
      type: String,
      require: false,
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
