module.exports = (sequelize, dataTypes) => {
    
    let alias = "Brands";
    
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
        }
    }

    let config = {
        underscored : true
    }
    const Brands = sequelize.define(alias, cols, config);

    return Brands
}