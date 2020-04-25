const express = require('express');
var router = express.Router();

var multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, 'naoufal' + '-' + file.originalname);

    }
})

const filterFiles = (req, file, cb) => {

}
const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 3
    }
})

const ctrl = require('../controllers/inventory/products');

// admin
router.get('/', ctrl.show_all_products);
// manager adds a product
router.post('/add', upload.single('productImage'), ctrl.add_single_product);
// manager preview a product
router.get('/:id', ctrl.show_single_product);

module.exports = router;
