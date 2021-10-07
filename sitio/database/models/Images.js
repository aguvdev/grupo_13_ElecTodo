module.exports = (sequelize, dataTypes) => {
    
    let alias = "images";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(255),
            allowNull: false
        },
        product_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        tableName : 'images',
        underscored : true
    }
    const Images = sequelize.define(alias, cols, config);
    Images.associate = models => {
        Images.belongsTo(models.Products,{
            as : "product",
            foreignKey : "product_id"
        })
    }
    return Images
}