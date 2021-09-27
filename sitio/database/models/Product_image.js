module.exports = (sequelize, dataTypes) => {
    
    let alias = "Product_image";
    
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
        },
        created_at : {
            type : dataTypes.STRING(50),
            allowNull: false
        },
        updated_at : {
            type : dataTypes.STRING(50),
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const Product_image = sequelize.define(alias, cols, config);
    Product_image.associate = models => {
        Product_image.belongsTo(models.Product,{
            as : "products",
            foreignKey : "image_id"
        })
    }
    return Product_image
}