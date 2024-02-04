import { Router } from 'express';
import { sampleRouter } from './routers/sample.router';
import { adminRouter } from './routers/admin.router';
import { customerRouter } from './routers/customer.route';
import { addressRouter } from './routers/address.router';
import { cityRouter } from './routers/city.router';
import { productRouter } from './routers/product.router';
import { branchRouter } from './routers/branch.router';
import { cartRouter } from './routers/cart.router';
import { transactionRouter } from './routers/transaction.router';
import { branch_productRouter } from './routers/branch.product.router';
import { userVouchersRouter } from './routers/user.voucher.router';
import { voucherRouter } from './routers/voucher.router';
import { shippingRouter } from './routers/shipping.router';
import { categoryRouter } from './routers/category.router';

const router = Router();

router.get('/', (req, res) => {
  res.send(`Hello, Purwadhika Student !`);
});

router.use('/sample', sampleRouter);
router.use('/customer', customerRouter);
router.use('/address', addressRouter);
router.use('/cities', cityRouter);
router.use('/cart', cartRouter);
router.use('/branch-product', branch_productRouter);
router.use('/admins', adminRouter);
router.use('/product', productRouter);
router.use('/branch', branchRouter);
router.use('/transaction', transactionRouter);
router.use('/user-vouchers', userVouchersRouter);
router.use('/vouchers', voucherRouter);
router.use('/shipping', shippingRouter);
router.use('/categories', categoryRouter);
// add another router here ...

export default router;
