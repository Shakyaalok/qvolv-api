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
router.use(authController.authenticateJWT)
// User CRUD
router.get('/',  authController.getdAll)
router.post('/',  authController.addNew)
router.put('/:id',  authController.update)
router.delete('/:id',  authController.delete)

// Retrieve all roles
router.get('/roles',  roleController.getAll)

router.get('/usergroup-list',  userGroupController.getList)
router.get('/usergroup',  userGroupController.getAll)
router.post('/usergroup',  userGroupController.addNew)
router.delete('/usergroup/:id',  userGroupController.delete)
router.put('/usergroup/:id',  userGroupController.update)

router.get('/professionals',  professionalController.getAll)
router.post('/professionals',  professionalController.addNew)
router.put('/professionals/:id',  professionalController.update)
router.delete('/professionals/:id',  professionalController.delete)

router.get('/patients',  patientController.getAll)
router.post('/patients',  patientController.addNew)
router.put('/patients/:id',  patientController.update)
router.delete('/patients/:id',  patientController.delete)

router.get('/categories',  categoryController.getAll)
router.post('/categories',  categoryController.addNew)
router.put('/categories/:id',  categoryController.update)
router.delete('/categories/:id',  categoryController.delete)

router.get('/licenses',  licenseController.getAll)
router.post('/licenses',  licenseController.addNew)
router.put('/licenses/:id',  licenseController.update)
router.delete('/licenses/:id',  licenseController.delete)

router.get('/students',  studentController.getAll)


router.get('/allProduct', productController.getAllProducts)
router.get('/publish', productController.getPublishedProduct)
router.post('/addProduct', productController.addProduct)
router.get('/product/:id', productController.getOneProduct)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)

router.get('/customers/names',  customerController.getAllNames)
router.get('/customers',  customerController.getAll)
router.post('/customers',  customerController.addNew)
router.get('/customers/:id',  customerController.get)
router.put('/customers/:id',  customerController.update)
router.delete('/customers/:id',  customerController.delete)

router.get('/contents/names',  contentController.getAllNames)
router.get('/contents',  contentController.getAll)
router.post('/contents',  contentController.addNew)
router.get('/contents/:id',  contentController.get)
router.put('/contents/:id',  contentController.update)
router.delete('/contents/:id',  contentController.delete)

router.get('/userlicenses',  userlicenseController.getAll)
//router.post('/userlicenses', authController.authenticateJWT, userlicenseController.addNew)
//router.get('/userlicenses/:id', authController.authenticateJWT, userlicenseController.get)
//router.put('/userlicenses/:id', authController.authenticateJWT, userlicenseController.update)
//router.delete('/userlicenses/:id', authController.authenticateJWT, userlicenseController.delete)

router.get('/devices',  deviceController.getAll)
router.post('/devices',  deviceController.addNew)
router.get('/devices/:id',  deviceController.get)
router.put('/devices/:id',  deviceController.update)
router.delete('/devices/:id',  deviceController.delete)

router.get('/persons',  personController.getAll)
router.post('/persons',  personController.addNew)
router.get('/persons/:id',  personController.getAllByEntityId)
router.put('/persons/:id',  personController.update)
router.delete('/persons/:id',  personController.delete)


// Update a User with id
// router.put('/:id', authController.update);

// Delete a User with id
// router.delete('/:id', authController.delete);


module.exports = router;