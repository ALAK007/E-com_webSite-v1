
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    sku: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    product_image: {
        type: String,
        // required: true
    },
    subcategory_id: {
        type: String,
    },
    short_description: {
        type: String,
    },
    long_description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    discount_price: {
        type: Number,
    },
    options: {
        type: []
    },
    active: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true,
}
)

const Product = mongoose.model("Product", productSchema);

export default Product;