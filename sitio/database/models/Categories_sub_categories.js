module.exports = (sequelize, dataTypes) => {
    
    let alias = "categories_sub_categories";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        category_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        sub_category_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        timestamps : false,//todas q sean tablas intermedia lleva esto pa
        underscored : true
    }
    const categories_sub_categories = sequelize.define(alias, cols, config);

    return categories_sub_categories
}