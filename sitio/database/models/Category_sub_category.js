module.exports = (sequelize, dataTypes) => {
    
    let alias = "Category_sub_category";
    
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
    const Category_sub_category = sequelize.define(alias, cols, config);

    return Category_sub_category
}