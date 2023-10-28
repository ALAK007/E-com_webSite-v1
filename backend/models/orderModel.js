import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    orderItems: [
        {
            name: { type: String, required: true},
            qty: { type: Number, required: true},
            image: { type: String, required: true},
            price: { type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
        }
    ],
    customer_id: {
        type: String,
        required: true,
    },
    cart_total_price: {
        type: Number,
    },
    status: {
        type: String,
    },
},
{
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema);

export default Order;