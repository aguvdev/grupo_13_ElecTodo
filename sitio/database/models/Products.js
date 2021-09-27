
module.exports = (sequelize, dataTypes) => {
    
    let alias = "Products";
    
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
    
    /* relaciones */
    Products.associate = models => {
        Products.belongsTo(models.Categories,{
            as : "Categories",
            foreignKey : "category_id"
        }),
        Products.belongsToMany(models.User, {
            as: "users",
            through:"Cart",
            foreignKey:"product_id",
            otherKey: "user_id"
        }),
        Products.hasMany(models.Product_image, {
            as: "product_images",
            foreignKey: "image_id"
        })
    }
    
    return Products
}