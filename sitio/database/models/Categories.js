module.exports = (sequelize, dataTypes) => {
    
    let alias = "Categories";
    
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
        tablename: 'categories',
        timestamps : false,
        underscored : true
    }
    const Categories = sequelize.define(alias, cols, config);

    /* relaciones */
    Categories.associate = models => {
        Categories.hasMany(models.Products,{
            as : "Products",
            foreignKey : "category_id"
        }),
    
        Categories.hasMany(models.Brand,{
            as : "brands",
            foreignKey : "brand_id"
        }),
     
        Categories.belongsToMany(models.Sub_category, {
            as: "subcategories",
            through:"Category_sub_category",
            foreignKey:"category_id",
            otherKey: "sub_category_id"
        })
    }
    return Categories
}