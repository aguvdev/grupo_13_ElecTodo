module.exports = (sequelize, dataTypes) => {
    
    let alias = "Rols";
    
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
    const Rols = sequelize.define(alias, cols, config);

    return Rols
}