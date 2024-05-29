import express from 'express';
import { createOrder } from '../controllers/OrderController.js';

const OrderRouter = express.Router();

OrderRouter.post('/create', createOrder);

export default OrderRouter;
