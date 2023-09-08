const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  
    productName: {
    type: String,
    required: true
  },
    userId: {
    type: String,
    required: true
  },
    productImage: {
    type: String,
    required: true
  },

  
 
  
});

const products = mongoose.model('products', productSchema);

module.exports = products;
