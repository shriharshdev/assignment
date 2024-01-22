const express = require('express')
const router = express.Router()
const Vendor = require('../models/vendors')
const vendorController = require('../controllers/vendorController')

//GET all Vendors
router.get('/vendors',vendorController.getVendors)

//GET a single Vendor
router.get('/:id',vendorController.getVendor)

//POST a vendor
router.post('/add', vendorController.createVendor)

//DELELTE a vendor
router.delete('/:id',vendorController.deleteVendor)

//UPDATE a vendor
router.patch('/:id',vendorController.updateVendor)

module.exports = router