'use strict';

const Student = require('../models/student.model')

exports.getAll = (req, result) => {
    const ownRole = req.user.role.map(item => item.nome)
    const accessToken = req.accessToken
    const refreshToken = req.refreshToken
    if (ownRole.includes('ROLE_ROOM_VIEW')){
        Student.getAll((err, students) => {
            if (err) result.send({error: true, message: err, accessToken, refreshToken})
            else result.json({students, accessToken, refreshToken})
        })
    } else result.send({error: true, message: 'No Permission', accessToken, refreshToken})
}