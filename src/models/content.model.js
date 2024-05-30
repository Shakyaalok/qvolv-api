module.exports=(sequelize, DataTypes)=>{

    const Content = sequelize.define('contents', {

      name:{
          type: DataTypes.STRING,
          allowNull: false
      },
      icon:{
          type: DataTypes.TEXT,
          allowNull: true 
      },
      category:{
        type: DataTypes.STRING,
        allowNull: false
      },
      course:{
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    return Content;
}