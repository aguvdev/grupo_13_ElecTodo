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
            type : dataTypes.STRING(500),
            allowNull: false
        },
        email : {
            type : dataTypes.STRING(50),
            allowNull: false
        },
        rol : {
            type : dataTypes.STRING(10),
            allowNull: false
        },
        phone : {
            type : dataTypes.INTEGER,
            allowNull: true
        },
        address_id : {
            type : dataTypes.INTEGER,
            allowNull: true
        },
        avatar : {
            type : dataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        timestamps : false,
        underscored : true
    }
    const User = sequelize.define(alias, cols, config);
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
        User.belongsToMany(models.Products, {
            as: "products",
            through:"Cart",
            foreignKey:"user_id",
            otherKey: "product_id"
        })
    }
    return User
}