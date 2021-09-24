module.exports = (sequelize, dataTypes) => {
    
    let alias = "Users_images";
    
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
        updated_at : {
            type : dataTypes.DATE,
            allowNull: false
        },
        created_at : {
            type : dataTypes.DATE,
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const Users_images = sequelize.define(alias, cols, config);

    return Users_images
}