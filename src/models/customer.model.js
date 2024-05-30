module.exports=(sequelize, DataTypes)=>{

    const Customer = sequelize.define('customers', {

      name:{
          type: DataTypes.STRING,
          allowNull: false
      },
      phone:{
          type: DataTypes.STRING,
          allowNull: false 
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false
      },
      type:{
        type: DataTypes.STRING,
        allowNull: false
      },
      address:{
          type: DataTypes.TEXT,
          allowNull: false
      },
      usercount:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      devicecount:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gstin:{
          type: DataTypes.TEXT
      },
      licensestartdate:{
        type: DataTypes.DATE
      },
      licenseEnddate:{
      type: DataTypes.DATE
      }
    });

    return Customer;

}