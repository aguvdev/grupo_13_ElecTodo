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
        timestamps : false,
        underscored : true
    }
    const Categories = sequelize.define(alias, cols, config);

    /* relaciones */
    Categories.associate = models => {
        Categories.hasMany(models.Producto,{
            as : "Products",
            foreignKey : "category_id"
        })
    }
    

    return Categories
}