const db = require('../models/modelindex')

const Content = db.contents

exports.addNew = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let info = {
        name: req.body.name,
        icon: req.body.icon,
        category: req.body.category, 
        course: req.body.course   
    }   
    const isExistingName = await Content.findOne({ where:{name: req.body.name}})
    if(isExistingName !== null && isExistingName !== ''){
        res.send({error: true, message: 'Name is already exist', accessToken, refreshToken})
    } else {
        const content = await Content.create(info).then(() =>{
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
    
        const content = await Content.findAll({})
        res.status(200).send({content, accessToken, refreshToken})
    }
}

exports.getAllNames = async (req,res) =>{
    if(req.user != undefined){
        const ownRole = req.user.role.map(item => item.nome)
        const accessToken = req.accessToken
        const refreshToken = req.refreshToken
    
        const content = await Content.findAll({attributes: [['id', 'value'], ['name', 'label']]})
        res.status(200).send({content, accessToken, refreshToken})
    }
}

exports.get = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const content = await Content.findOne({ where:{id: id}})
    res.status(200).send(content)
}

exports.update = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const content = await Content.update(req.body, { where:{id: id}}).then(() =>{
        res.json({message: 'Success', accessToken, refreshToken})
    }).catch((err)=>{
        res.send({error: true, message: 'No Permission', accessToken, refreshToken})
    })
    res.status(200).send(content)
}

exports.delete = async (req,res) =>{
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    await Content.destroy({ where:{id: id}}).then(() =>{
        res.json({message: 'Success', accessToken, refreshToken})
    }).catch((err)=>{
        res.send({error: true, message: 'No Permission', accessToken, refreshToken})
    })
}