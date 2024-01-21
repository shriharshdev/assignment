const Vendor = require('../models/vendors')
const mongoose = require('mongoose')

//get all vendors
exports.getVendors = async(req,res) => {
    const vendors = await Vendor.find({}).sort({createdAt:-1})
    res.status(200).json(vendors)
}

//get a single vendor
exports.getVendor = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such vendor"})
    }
    const vendor = await Vendor.findById(id)
    if(!vendor){
        return res.status(404).json({error:"No such vendor"})
    }
    res.status(200).json(vendor)
}

//create new vendor
exports.createVendor = async(req,res) =>{
    const {name, accountNum, bankName, address, city, country, code} = req.body
    try{
        const vendor = await Vendor.create({name, accountNum, bankName, address, city, country, code})
        res.status(200).json(vendor)
    }catch(err){
        res.status(400).json({err:err.message})
    }
}

//delete a vendor


//update a vendor
