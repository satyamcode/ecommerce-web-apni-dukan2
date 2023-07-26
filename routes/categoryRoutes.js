import express from "express";

import { CreateCategoryController, updatecategoryController , categoryController, deleteCategoryController, singleCategoryController} from "../controllers/categoryController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();
//routes
// certe category
router.post('/create-category',requireSignIn,isAdmin,CreateCategoryController)

// update category
router.put('/update-category/:id',requireSignIn,isAdmin,updatecategoryController)

// getall category
router.get('/get-category', categoryController)

// single category
 router.get("/single-category/:slug",singleCategoryController);

//  delete category
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController);

export default router

