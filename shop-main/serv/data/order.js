import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  paymentType: { type: String, required: true }, // 'card' or 'cash_on_delivery'
  isPaid: { type: Boolean, default: false },
  address: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', OrderSchema);