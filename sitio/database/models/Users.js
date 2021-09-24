module.exports = (sequelize, dataTypes) => {
    
    let alias = "Users";
    
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
    const Users = sequelize.define(alias, cols, config);

    return Users
}