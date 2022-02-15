const express= require('express');
const router=express.Router();
const ProductsManager = require('../Manager/ProductsManager');
const ProductsService = new ProductsManager();
const uploader= require('../Uploader/Upload');


router.get('/',(req,res) =>{
    ProductsService.get().then(result=>res.send(result))
})
router.post('/',uploader.single('file'),(req,res) =>{
    let product =req.body;
    let file =req.file;
    if(!file) return res.status(500).send({result:'Couldnt upload'})
    product.thumbnail = req.protocol+'://'+req.hostname+":8080/img/"+file.filename;
    ProductsService.add(product).then(result=>res.send({result}));
})
router.delete('/:id',(req, res)=>{
    ProductsService.delete(req.params.id).then(result=>res.send({result}))
})
router.get('/:id',(req, res)=>{
    ProductsService.getById(req.params.id).then(result=>res.send({result}))
})
router.put('/:id',(req, res)=>{
    let bodi=req.body;
    ProductsService.UploadById(req.params.id,bodi).then(result=>res.send({result}))
})

module.exports=router;