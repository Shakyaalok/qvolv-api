const db = require('../models/modelindex')

const Person = db.persons

exports.addNew = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let info = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender, 
        email: req.body.email,
        password: req.body.password,
        category: req.body.category,
        contentid: req.body.contentid,
        license: req.body.license,
        customerid: req.body.customerid,   
    }   
    const isExistingName = await Person.findOne({ where:{email: req.body.email}})
    if(isExistingName !== null && isExistingName !== ''){
        res.send({error: true, message: 'email is already exist', accessToken, refreshToken})
    } else {
        const person = await Person.create(info).then(() =>{
            res.json({message: "Success", accessToken, refreshToken})
        }).catch((err)=>{
            res.send({error: true, message: 'No Permission', accessToken, refreshToken})
        }) 
    }   
}

exports.getAll = async (req,res) =>{
    if(req.user != undefined){
        const ownRole = req.user.role.map(item => item.nome)
        const accessToken = req.accessToken
        const refreshToken = req.refreshToken
    
        const person = await Person.findAll({})
        res.status(200).send({person, accessToken, refreshToken})
    }
}

exports.getAllByEntityId = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const person = await Person.findAll({ where:{customerid: id}})
    res.status(200).send({person, accessToken, refreshToken})
}

exports.update = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const person = await Person.update(req.body, { where:{id: id}}).then(() =>{
        res.json({message: 'Success', accessToken, refreshToken})
    }).catch((err)=>{
        res.send({error: true, message: 'No Permission', accessToken, refreshToken})
    })
    res.status(200).send(person)
}

exports.delete = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    await Person.destroy({ where:{id: id}}).then(() =>{
        res.json({message: 'Success', accessToken, refreshToken})
    }).catch((err)=>{
        res.send({error: true, message: 'No Permission', accessToken, refreshToken})
    })
}