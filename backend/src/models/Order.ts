import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  customerId: string;
  items: {
    productId: string;
    quantity: number;
  }[];
  status: 'PLACED' | 'PICKED' | 'SHIPPED' | 'DELIVERED';
  paymentStatus: 'PENDING' | 'PAID';
}

const OrderSchema: Schema = new Schema(
  {
    customerId: { type: String, required: true },
    items: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    status: {
      type: String,
      enum: ['PLACED', 'PICKED', 'SHIPPED', 'DELIVERED'],
      default: 'PLACED',
    },
    paymentStatus: {
      type: String,
      enum: ['PENDING', 'PAID'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>('Order', OrderSchema);
