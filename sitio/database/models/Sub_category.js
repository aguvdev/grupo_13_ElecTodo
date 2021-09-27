module.exports = (sequelize, dataTypes) => {
    
    let alias = "Sub_category";
    
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
        }
    }

    let config = {
        underscored : true
    }
    const Sub_category = sequelize.define(alias, cols, config);

    Sub_category.associate = function (models) {
        Sub_category.belongsToMany(models.Categories, {
            as: "categories",
            through:"Category_sub_category",
            foreignKey:"sub_category_id",
            otherKey: "category_id"
        })
    }
    return Sub_category
}