const db = require('../models/modelindex')

const Device = db.devices

exports.addNew = async (req, res) => {
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let info = {
        name: req.body.name,
        deviceid: req.body.deviceid,
        customerid: req.body.customerid,
        status: req.body.status
    }
    const device = await Device.create(info).then(() => {
        res.json({ message: "Success", accessToken, refreshToken })
    }).catch((err) => {
        res.send({ error: true, message: 'No Permission', accessToken, refreshToken })
    })

}

exports.getAll = async (req, res) => {
    if (req.user != undefined) {
        const ownRole = req.user.role.map(item => item.nome)
        const accessToken = req.accessToken
        const refreshToken = req.refreshToken

        const device = await Device.findAll({})
        res.status(200).send({ device, accessToken, refreshToken })
    }
}

exports.get = async (req, res) => {
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const device = await Device.findOne({ where: { id: id } })
    res.status(200).send(device)
}

exports.update = async (req, res) => {
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    const device = await Device.update(req.body, { where: { id: id } }).then(() => {
        res.json({ message: 'Success', accessToken, refreshToken })
    }).catch((err) => {
        res.send({ error: true, message: 'No Permission', accessToken, refreshToken })
    })
    res.status(200).send(device)
}

exports.delete = async (req, res) => {
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    let id = req.params.id
    await Device.destroy({ where: { id: id } }).then(() => {
        res.json({ message: 'Success', accessToken, refreshToken })
    }).catch((err) => {
        res.send({ error: true, message: 'No Permission', accessToken, refreshToken })
    })
}