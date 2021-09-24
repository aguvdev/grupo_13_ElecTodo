module.exports = (sequelize, dataTypes) => {
    
    let alias = "Products_images";
    
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
    const Products_images = sequelize.define(alias, cols, config);

    return Products_images
}