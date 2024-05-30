const express = require('express');
const router = express.Router();
const authController = require('./controllers/auth.controller')
const professionalController = require('./controllers/professional.controller')
const roleController = require('./controllers/role.controller')
const userGroupController = require('./controllers/usergroup.controller')
const patientController = require('./controllers/patient.controller')
const categoryController = require('./controllers/category.controller')
const licenseController = require('./controllers/license.controller')
const studentController = require('./controllers/students.controller')
const productController = require('./controllers/product.controller')
const customerController = require('./controllers/customer.controller')
const contentController = require('./controllers/content.controller')
const userlicenseController = require('./controllers/userlicense.controller')
const deviceController = require('./controllers/device.controller')
const personController = require('./controllers/person.controller')

router.post('/login', authController.login)
router.post('/logout', authController.logout)

// User CRUD
router.get('/', authController.authenticateJWT, authController.getdAll)
router.post('/', authController.authenticateJWT, authController.addNew)
router.put('/:id', authController.authenticateJWT, authController.update)
router.delete('/:id', authController.authenticateJWT, authController.delete)

// Retrieve all roles
router.get('/roles', authController.authenticateJWT, roleController.getAll)

router.get('/usergroup-list', authController.authenticateJWT, userGroupController.getList)
router.get('/usergroup', authController.authenticateJWT, userGroupController.getAll)
router.post('/usergroup', authController.authenticateJWT, userGroupController.addNew)
router.delete('/usergroup/:id', authController.authenticateJWT, userGroupController.delete)
router.put('/usergroup/:id', authController.authenticateJWT, userGroupController.update)

router.get('/professionals', authController.authenticateJWT, professionalController.getAll)
router.post('/professionals', authController.authenticateJWT, professionalController.addNew)
router.put('/professionals/:id', authController.authenticateJWT, professionalController.update)
router.delete('/professionals/:id', authController.authenticateJWT, professionalController.delete)

router.get('/patients', authController.authenticateJWT, patientController.getAll)
router.post('/patients', authController.authenticateJWT, patientController.addNew)
router.put('/patients/:id', authController.authenticateJWT, patientController.update)
router.delete('/patients/:id', authController.authenticateJWT, patientController.delete)

router.get('/categories', authController.authenticateJWT, categoryController.getAll)
router.post('/categories', authController.authenticateJWT, categoryController.addNew)
router.put('/categories/:id', authController.authenticateJWT, categoryController.update)
router.delete('/categories/:id', authController.authenticateJWT, categoryController.delete)

router.get('/licenses', authController.authenticateJWT, licenseController.getAll)
router.post('/licenses', authController.authenticateJWT, licenseController.addNew)
router.put('/licenses/:id', authController.authenticateJWT, licenseController.update)
router.delete('/licenses/:id', authController.authenticateJWT, licenseController.delete)

router.get('/students', authController.authenticateJWT, studentController.getAll)


router.get('/allProduct', productController.getAllProducts)
router.get('/publish', productController.getPublishedProduct)
router.post('/addProduct', productController.addProduct)
router.get('/product/:id', productController.getOneProduct)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)

router.get('/customers/names', authController.authenticateJWT, customerController.getAllNames)
router.get('/customers', authController.authenticateJWT, customerController.getAll)
router.post('/customers', authController.authenticateJWT, customerController.addNew)
router.get('/customers/:id', authController.authenticateJWT, customerController.get)
router.put('/customers/:id', authController.authenticateJWT, customerController.update)
router.delete('/customers/:id', authController.authenticateJWT, customerController.delete)

router.get('/contents/names', authController.authenticateJWT, contentController.getAllNames)
router.get('/contents', authController.authenticateJWT, contentController.getAll)
router.post('/contents', authController.authenticateJWT, contentController.addNew)
router.get('/contents/:id', authController.authenticateJWT, contentController.get)
router.put('/contents/:id', authController.authenticateJWT, contentController.update)
router.delete('/contents/:id', authController.authenticateJWT, contentController.delete)

router.get('/userlicenses', authController.authenticateJWT, userlicenseController.getAll)
//router.post('/userlicenses', authController.authenticateJWT, userlicenseController.addNew)
//router.get('/userlicenses/:id', authController.authenticateJWT, userlicenseController.get)
//router.put('/userlicenses/:id', authController.authenticateJWT, userlicenseController.update)
//router.delete('/userlicenses/:id', authController.authenticateJWT, userlicenseController.delete)

router.get('/devices', authController.authenticateJWT, deviceController.getAll)
router.post('/devices', authController.authenticateJWT, deviceController.addNew)
router.get('/devices/:id', authController.authenticateJWT, deviceController.get)
router.put('/devices/:id', authController.authenticateJWT, deviceController.update)
router.delete('/devices/:id', authController.authenticateJWT, deviceController.delete)

router.get('/persons', authController.authenticateJWT, personController.getAll)
router.post('/persons', authController.authenticateJWT, personController.addNew)
router.get('/persons/:id', authController.authenticateJWT, personController.getAllByEntityId)
router.put('/persons/:id', authController.authenticateJWT, personController.update)
router.delete('/persons/:id', authController.authenticateJWT, personController.delete)


// Update a User with id
// router.put('/:id', authController.update);

// Delete a User with id
// router.delete('/:id', authController.delete);


module.exports = router;