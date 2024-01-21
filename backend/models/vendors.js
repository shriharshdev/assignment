const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vendorSchema = new Schema({
    name: { type: String, required: true },
    accountNum: { type: String, required: true },
    bankName: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    code: { type: Number, required:true}
},{timestamps:true})


module.exports = mongoose.model('Vendor', vendorSchema)