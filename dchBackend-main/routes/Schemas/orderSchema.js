const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    name: {
        type: String,
        default:''
    },
    phone: {
        type: String,
        default:''
    },
    email: {
        type: String,
        default:''
    },
    fullAddress: {
        type: String,
        default:''
    },
    city: {
        type: String,
        default:''
    },
    state: {
        type: String,
        default:''
    },
    pincode: {
        type: String,
        default:''
    },
    productName: {
        type: String,
        default:''
    },
    size: {
        type: String,
        default:''
    },
    quantity: {
        type: String,
        default:''
    },
    logo: {
        type: String,
        default:''
    },
    payment: {
        type: String,
        default:'Not Done'
    },




});

const orders = mongoose.model('orders', orderSchema);

module.exports = orders;
