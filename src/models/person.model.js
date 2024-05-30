module.exports = (sequelize, DataTypes) => {

    const Person = sequelize.define('persons', {

        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contentid: {
            type: DataTypes.STRING,
            allowNull: true,
            get: function() {
                return JSON.parse(this.getDataValue('contentid'));
            }, 
            set: function(val) {
                return this.setDataValue('contentid', JSON.stringify(val));
            }
        },
        license: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        customerid: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    return Person;
}