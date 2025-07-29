import { Request, Response } from 'express';
import Order from '../models/Order';
import Product from '../models/Product';

export const createOrder = async (req: Request, res: Response, io: any) => {
  try {
    const { customerId, items, paymentStatus } = req.body;

    if (!customerId || !items || !Array.isArray(items)) {
      return res.status(400).json({ message: 'Invalid order data' });
    }

    // Check stock for each product
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.productId}` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
      }

      product.stock -= item.quantity;
      await product.save();
    }

    const order = new Order({
      customerId,
      items,
      paymentStatus: paymentStatus || 'PENDING',
      status: 'PLACED',
    });

    await order.save();

    io.emit('orderCreated', order);

    res.status(201).json(order);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: error.message });
  }
};

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req: Request, res: Response, io: any) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    io.emit('orderUpdated', order);

    res.status(200).json(order);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: error.message });
  }
};
