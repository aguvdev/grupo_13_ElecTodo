module.exports = (sequelize, dataTypes) => {
    
    let alias = "Method_payment";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        method : {
            type : dataTypes.STRING(50),
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const Method_payment = sequelize.define(alias, cols, config);

    return Method_payment
}