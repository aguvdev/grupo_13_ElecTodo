module.exports = (sequelize, dataTypes) => {
    
    let alias = "Cart";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        user_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        product_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        method_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        purchase_date : {
            type : dataTypes.DATE,
            allowNull: false
        },
        quantity : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        total : {
            type : dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const Cart = sequelize.define(alias, cols, config);
    
  
    return Cart
}