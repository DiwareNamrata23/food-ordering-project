import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { placeOrder, verifyOrder ,userOrder ,listOrders, updateStatus} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get('/debug', (req, res) => {
    res.send("✅ Order router is working");
  });
  orderRouter.get('/verify', (req, res) => {
    res.status(405).json({ success: false, message: 'GET not allowed. Use POST.' });
  });
  

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorder', authMiddleware,userOrder);
orderRouter.get('/list',listOrders);
orderRouter.post('/status', updateStatus);

export default orderRouter;