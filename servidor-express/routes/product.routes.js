import express from 'express'
import { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router()

// GET /product
router.get('/',getProducts)

//Get /product/:id
router.get('/:id',getProductById)

//Post /product
router.post('/',createProduct)

//Put /product/:id
router.put('/:id',updateProduct)

//delete /product/:id
router.delete('/:id',deleteProduct)

export default router;