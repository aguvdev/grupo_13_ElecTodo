module.exports = (sequelize, dataTypes) => {
    
    let alias = "Category";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull: false
        },
        brand_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        timestamps : false,
        underscored : true
    }
    const Category = sequelize.define(alias, cols, config);

    /* relaciones */
    Category.associate = models => {
        Category.hasMany(models.Product,{
            as : "Products",
            foreignKey : "category_id"
        })
    }
    Category.associate = models => {
        Category.hasMany(models.Brand,{
            as : "brands",
            foreignKey : "brand_id"
        })
    }    
    Category.associate = function (models) {
        Category.belongsToMany(models.Sub_category, {
            as: "subcategories",
            through:"Category_sub_category",
            foreignKey:"category_id",
            otherKey: "sub_category_id"
        })
    }
    return Category
}