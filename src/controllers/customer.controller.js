const db = require('../models/modelindex')

const Customer = db.customers
const UerLicense = db.userlicense
const sequelize = db.sequelize

exports.addNew = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let info = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        type: req.body.type, 
        devicecount: req.body.devicecount,
        usercount: req.body.usercount, 
        address: req.body.address,
        gstin: req.body.gstin,
        licensestartdate: req.body.licensestartdate,
        licenseEnddate: req.body.licenseEnddate,         
    }   
    const isExistingcustomer = await Customer.findOne({ where:{email: req.body.email}})
    if(isExistingcustomer != null && isExistingcustomer !== ''){
        res.send({error: true, message: 'Email is already registered', accessToken, refreshToken})
    } else {
        const t = await sequelize.transaction();
        try {
            const customer = await Customer.create(info)
            let licenseDetails = {
                total: customer.usercount,
                used: 0,
                unused: 0, 
                customerid: customer.id,
                customername: customer.name, 
                licensestartdate: customer.licensestartdate,
                licenseEnddate: customer.licenseEnddate,         
            }  
            UerLicense.create(licenseDetails)
            await t.commit();
            res.json({message: "Success", accessToken, refreshToken})
          } catch (error) {
            console.log("Error--> "+ error.message);
            await t.rollback();
            res.send({error: true, message: 'No Permission', accessToken, refreshToken})
          }
    }   
}

exports.getAll = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken

    const customer = await Customer.findAll({})
    res.status(200).send({customer, accessToken, refreshToken})
}

exports.getAllNames = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken

    const customer = await Customer.findAll({attributes: [['id', 'value'], ['name', 'label']]})
    res.status(200).send({customer, accessToken, refreshToken})
}

exports.get = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const customer = await Customer.findOne({ where:{id: id}})
    res.status(200).send(customer)
}

exports.update = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
//    res.status(200).send(customer)
    const t = await sequelize.transaction();
        try {
            await Customer.update(req.body, { where:{id: id}})
            let licenseDetails = {
                customername: req.body.name, 
                licensestartdate: req.body.licensestartdate,
                licenseEnddate: req.body.licenseEnddate,         
            }  
            UerLicense.update(licenseDetails, {where: {customerid: id}})
            await t.commit();
            res.json({message: 'Success', accessToken, refreshToken})
          } catch (error) {
            console.log("Error--> "+ error.message);
            await t.rollback();
            res.send({error: true, message: 'No Permission', accessToken, refreshToken})
          }
}

exports.delete = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const t = await sequelize.transaction();
        try {
            UerLicense.destroy({where: {customerid: id}})
            Customer.destroy({ where:{id: id}})
            await t.commit();
            res.json({message: 'Success', accessToken, refreshToken})
          } catch (error) {
            console.log("Error--> "+ error.message);
            await t.rollback();
            res.send({error: true, message: 'No Permission', accessToken, refreshToken})
          }
}