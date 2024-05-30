const dbConn = require('../../config/db.config')

var Student = function(){}

Student.getAll = (result) =>{

    dbConn.query("select * from students", null, (err, res) => {
        if (err) result(err, null)
        else result(null, res)})
}

module.exports = Student