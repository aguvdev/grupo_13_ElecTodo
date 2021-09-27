module.exports = (sequelize, dataTypes) => {
    
    let alias = "User";
    
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
        password : {
            type : dataTypes.STRING(12),
            allowNull: false
        },
        email : {
            type : dataTypes.STRING(50),
            allowNull: false
        },
        image_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        rol_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        phone : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        address_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasOne(models.User_image, {
            as: "users_images",
            foreignKey: "image_id"
        })
    }
    User.associate = function(models){
        User.hasOne(models.Address, {
            as: "address",
            foreignKey: "address_id"
        })
    }
    User.associate = function(models){
        User.belongsTo(models.Rol, {
            as: "rols",
            foreignKey: "rol_id"
        })
    }
    User.associate = function (models) {
        User.belongsToMany(models.Product, {
            as: "products",
            through:"Cart",
            foreignKey:"user_id",
            otherKey: "product_id"
        })
    }
    return User
}