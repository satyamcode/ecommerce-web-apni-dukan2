import categoryModel from "../models/categoryModel.js"
import slugify from "slugify"
export const CreateCategoryController= async(req,res)=>{
    try{
        const {name}=req.body
        if(!name){
            return res.status(401).send({massage:"Name is Required"})
        }
        const existingCategory= await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:'Category Already Exists',
            })
        }
        const category=await new categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message: 'new category created',
            category,
        })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message:"error in categoryController"
        })
    }

}

// update category 

export const updatecategoryController= async(req,res)=>{
    try{
        const {name}=req.body;
        const {id}=req.params;
        const category = await categoryModel.findByIdAndUpdate(id,
            {name,slug:slugify(name)},
            {new:true}
            );
        res.status(201).send({
            success:true,
            message: 'category updated',
            category,
        })
    }
    catch (error){
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message:"error in updatecategorycontroller"
        })
    }
}

// getall category

export const categoryController=async(req,res)=>{
    try{
        
        const category = await categoryModel.find({})
            
        res.status(201).send({
            success:true,
            message: 'all category list',
            category,
        })
    }
    catch (error){
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message:"error while getting all category"
        })
    }
}

// single cateogry controller

export const singleCategoryController=async(req,res)=>{
    try{
        
        const category = await categoryModel.find({slug:req.params.slug})
            
        res.status(200).send({
            success:true,
            message: 'get single category ',
            category,
        })
    }
    catch (error){
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message:"error while getting single category"
        })
    }
}

// category delete***********
export const deleteCategoryController=async(req,res)=>{
    try{
        const {id}=req.params;
        await categoryModel.findByIdAndDelete(id);
            
        res.status(200).send({
            success:true,
            message: 'category   deleted successfully',
        })
    }
    catch (error){
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message:"error while deleting category"
        })
    }
}
