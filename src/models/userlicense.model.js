module.exports=(sequelize, DataTypes)=>{

    const License = sequelize.define('userlicense', {

      total:{
          type: DataTypes.INTEGER,
          allowNull: false
      },
      used:{
        type: DataTypes.INTEGER
      },
      unused:{
        type: DataTypes.INTEGER
      },
      customerid:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customers',
            key: 'id'
        }
      },
      customername:{
        type: DataTypes.STRING,
        allowNull: false
      },
      licensestartdate:{
        type: DataTypes.DATE
      },
      licenseEnddate:{
      type: DataTypes.DATE
      }
    });
    return License;
}