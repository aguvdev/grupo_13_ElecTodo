module.exports = (sequelize, dataTypes) => {
    
    let alias = "User_image";
    
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
    const User_image = sequelize.define(alias, cols, config);

    User_image.associate = function(models){
        User_image.belongsTo(models.User, {
            as: "users_images",
            foreignKey: "image_id"
        })
    }

    return User_image
}