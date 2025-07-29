import { Router } from 'express';
import * as OrderController from '../controllers/OrderController';

export default function orderRoutes(io: any) {
  const router = Router();

  router.post('/', (req, res) => OrderController.createOrder(req, res, io));
  router.get('/', OrderController.getOrders);
  router.patch('/:id/status', (req, res) => OrderController.updateOrderStatus(req, res, io));

  return router;
}
