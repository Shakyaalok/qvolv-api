const db = require('../models/modelindex')

const UserLicense = db.userlicense

exports.addNew = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    const t = await sequelize.transaction();
    try {
        /* let licenseDetails = {
                total: customer.usercount,
                used: 0,
                unused: 0, 
                customerid: customer.id,
                customername: customer.name, 
                licensestartdate: customer.licensestartdate,
                licenseEnddate: customer.licenseEnddate,         
            }  
            UerLicense.create(licenseDetails) */
            await t.commit();
            res.json({message: "Success", accessToken, refreshToken})
        } catch (error) {
            console.log("Error--> "+ error.message);
            await t.rollback();
            res.send({error: true, message: 'No Permission', accessToken, refreshToken})
         }
}

exports.getAll = async (req,res) =>{
    //const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken

    const userLicense = await UserLicense.findAll({})
    res.status(200).send({userLicense, accessToken, refreshToken})
}

exports.get = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const userLicense = await UserLicense.findOne({ where:{id: id}})
    res.status(200).send(userLicense)
}

exports.update = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const t = await sequelize.transaction();
        try {
            UserLicense.update(req.body, {where: {customerid: id}})
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
            UserLicense.destroy({where: {id: id}})
            res.json({message: 'Success', accessToken, refreshToken})
          } catch (error) {
            console.log("Error--> "+ error.message);
            await t.rollback();
            res.send({error: true, message: 'No Permission', accessToken, refreshToken})
          }
}