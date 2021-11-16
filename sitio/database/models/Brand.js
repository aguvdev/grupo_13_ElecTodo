module.exports = (sequelize, dataTypes) => {
    
    let alias = "Brand";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(50),
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const Brand = sequelize.define(alias, cols, config);
    
    Brand.associate = models => {
        Brand.belongsTo(models.Categories,{
            as : "Categories",
            foreignKey : "brand_id"
        })
    }
    return Brand
}