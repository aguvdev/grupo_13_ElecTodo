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
        },
        category_id : {
            type : dataTypes.INTEGER,
            allowNull: true
        }
    }

    let config = {
        underscored : true
    }
    const Sub_category = sequelize.define(alias, cols, config);

    Sub_category.associate = function (models) {
        Sub_category.belongsTo(models.Categories, {
            as: "categories",
            foreignKey:"category_id",
        })
    }
    return Sub_category
}