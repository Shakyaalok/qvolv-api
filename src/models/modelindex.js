
const dbConfig = require('../../config/db.config1')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,{
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: dbConfig.max,
            min: dbConfig.min,
            acquire: dbConfig.acquire,
            idle: dbConfig.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected with DB')
}).catch(err =>{
    console.log('error---> '+ err)
})

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./product.model')(sequelize, DataTypes)
db.reviews = require('./review.model')(sequelize, DataTypes)
db.customers = require('./customer.model')(sequelize, DataTypes)
db.contents = require('./content.model')(sequelize, DataTypes)
db.userlicense = require('./userlicense.model')(sequelize, DataTypes)
db.devices = require('./device.model')(sequelize, DataTypes)
db.persons = require('./person.model')(sequelize, DataTypes)

db.sequelize.sync({force : false, alter: true})
.then(()=> {
    console.log('yes re-sync done!')
})

module.exports = db