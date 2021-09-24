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
        underscored : true
    }
    const Categories = sequelize.define(alias, cols, config);

    return Categories
}