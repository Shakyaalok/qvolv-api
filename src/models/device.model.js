module.exports=(sequelize, DataTypes)=>{

    const Device = sequelize.define('devices', {

      name:{
          type: DataTypes.STRING,
          allowNull: false
      }, 
      deviceid:{
        type: DataTypes.STRING,
        allowNull: false
      },
      customerid:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
      } 
    });

    return Device;

}