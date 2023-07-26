import express from "express";
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";
import { CreateProductController, ProductPhotoController, brainTreePaymentController, braintreeTokenController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";
import { token } from "morgan";
const router = express.Router();

// routess*********
router.post('/create-product',requireSignIn,isAdmin,formidable(),CreateProductController)
// update product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)
// get product 

router.get('/get-product',getProductController)
// get single product 
router.get('/get-product/:slug',getSingleProductController);
// get photo
router.get('/product-photo/:pid',ProductPhotoController);
// delete product
router.delete('/delete-product/:pid',deleteProductController);
// filter rotes
router.post('/product-filters',productFiltersController);
// product count
router.get('/product-count',productCountController);
// product per page
router.get('/product-list/:page',productListController);
// products bty search
router.get('/search/:keyword',searchProductController);
// similer product
router.get('/related-product/:pid/:cid',relatedProductController)
// category wise product
router.get('/product-category/:slug',productCategoryController)
// payments route
// token
router.get('/braintree/token',braintreeTokenController);
// payments

router.post('/braintree/payment',requireSignIn,brainTreePaymentController)


export default router

