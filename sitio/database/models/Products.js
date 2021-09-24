
module.exports = (sequelize, dataTypes) => {
    
    let alias = "Producto";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull: false
        },
        description : {
            type : dataTypes.STRING(500),
            allowNull: false
        },
        price : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        discount : {
            type : dataTypes.INTEGER,
            allowNull: true
        },
        stock : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        created_at : {
            type : dataTypes.DATE,
            allowNull: false
        },
        updated_at : {
            type : dataTypes.DATE,
            allowNull: false
        },
        image_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        category_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        }
    } ;

    let config = {
        tableName : 'products',
        timestamps : true,
        underscored : true
    };

    const Products = sequelize.define(alias, cols, config);

    return Products
}