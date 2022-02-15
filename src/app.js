const express = require('express');
const productsManager= require('./Manager/productsManager')
const ProductsRouter= require('./routes/ProductsRouter')
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/productsRouter',ProductsRouter);
app.use(express.static(__dirname+'/public'));

const PORT = 8080;
const server = app.listen(PORT, ()=>console.log(`listening on ${PORT}`));