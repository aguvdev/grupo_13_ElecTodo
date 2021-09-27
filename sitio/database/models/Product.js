
module.exports = (sequelize, dataTypes) => {
    
    let alias = "Product";
    
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

    const Product = sequelize.define(alias, cols, config);
    
    /* relaciones */
    Product.associate = models => {
        Product.belongsTo(models.Category,{
            as : "Categories",
            foreignKey : "category_id"
        })
    }
    Product.associate = function (models) {
        Product.belongsToMany(models.User, {
            as: "users",
            through:"Cart",
            foreignKey:"product_id",
            otherKey: "user_id"
        })
    }
    Product.associate = function(models){
        Product.hasMany(models.Product_image, {
            as: "product_images",
            foreignKey: "image_id"
        })
    }
    
    return Product
}