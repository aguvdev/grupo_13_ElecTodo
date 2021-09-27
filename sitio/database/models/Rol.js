module.exports = (sequelize, dataTypes) => {
    
    let alias = "Rol";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        rol : {
            type : dataTypes.STRING(55),
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const Rol = sequelize.define(alias, cols, config);
    Rol.associate = function(models){
        Rol.hasMany(models.User, {
            as: "users",
            foreignKey: "rol_id"
        })
    }
    return Rol
}