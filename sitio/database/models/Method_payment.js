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

    Method_payment.associate = function(models){
        Method_payment.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "method_id"
        })
    }
    return Method_payment
}