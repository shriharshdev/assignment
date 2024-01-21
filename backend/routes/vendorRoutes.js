const express = require('express')
const router = express.Router()
const Vendor = require('../models/vendors')
const vendorController = require('../controllers/vendorController')


router.get('/vendors',vendorController.getVendors)
router.get('/:id',vendorController.getVendor)
router.post('/add', vendorController.createVendor)

router.delete('/:id',(req,res) => {
    res.send("Delete a vendor...")
})
router.patch('/:id',(req,res) => {
    res.send("Update a vendor...")
})
module.exports = router