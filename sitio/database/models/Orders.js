module.exports = (sequelize, dataTypes) => {
    
    let alias = "Orders";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        status : {
            type : dataTypes.STRING(255),
            allowNull: true
        },
        userId : {
            type : dataTypes.INTEGER,
            allowNull: true
        },
        total :{
            type : dataTypes.DECIMAL(10,0),
            allowNull: true
        }
    }

    let config = {
        underscored : true
    }
    const Orders = sequelize.define(alias, cols, config);

    Orders.associate = function(models){
        Orders.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "orderId"
        })
    }
    return Orders
}